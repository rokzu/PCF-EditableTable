import { ITag } from '@fluentui/react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Field } from '../../hooks/useLoadStore';
import {
  getLookupOptions,
  getRelationships,
  getEntityPluralName,
  openErrorDialog,
} from '../../services/DataverseService';
import store, { RootState } from '../store';
import { setLoading } from './LoadingSlice';

export type Relationship = {
  fieldNameRef: string,
  entityNameRef: string,
  entityNavigation?: string
}

export type Lookup = {
  logicalName: string | undefined,
  reference: Relationship | undefined,
  entityPluralName: string | undefined,
  options: ITag[]
}

interface ILookupState {
  relationships: Relationship[],
  lookups: Lookup[]
}

const initialState: ILookupState = {
  relationships: [],
  lookups: [],
};

type AsyncThunkConfig = {
  state: RootState
};

export const setRelationships = createAsyncThunk(
  'lookup/setRelationships', async () => await getRelationships(),
);

export const setLookups = createAsyncThunk<Lookup[], Field[], AsyncThunkConfig>(
  'lookup/setLookups',
  async (lookupColumns, thunkApi) =>
    await Promise.all(lookupColumns.map(async lookupColumn => {
      const { relationships } = thunkApi.getState().lookup;
      const { fieldName } = lookupColumn;

      const relationship: Relationship | undefined =
        relationships.find(relationship => {
          if (relationship.fieldNameRef === fieldName) return true;

          return false;
        });

      const entityName = relationship?.entityNameRef ?? '';
      const entityPluralName = await getEntityPluralName(entityName);
      const options = await getLookupOptions(entityName);

      return <Lookup>{
        logicalName: fieldName,
        reference: relationship,
        entityPluralName,
        options,
      };
    })),
);

export const lookupSlice = createSlice({
  name: 'lookup',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setRelationships.fulfilled, (state, action) => {
      state.relationships = [...action.payload];
    });

    builder.addCase(setRelationships.rejected, (state, action) => {
      state.relationships = [];
      openErrorDialog(action.error).then(() => {
        store.dispatch(setLoading(false));
      });
    });

    builder.addCase(setLookups.fulfilled, (state, action) => {
      state.lookups = [...action.payload];
    });

    builder.addCase(setLookups.rejected, (state, action) => {
      openErrorDialog(action.error).then(() => {
        store.dispatch(setLoading(false));
      });
    });
  },
});

export default lookupSlice.reducer;
