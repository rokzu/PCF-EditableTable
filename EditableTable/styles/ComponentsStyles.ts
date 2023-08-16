import {
  IBasePickerStyleProps,
  IBasePickerStyles,
  IButtonStyles,
  IComboBoxStyles,
  IDatePickerStyles,
  IIconStyleProps,
  IIconStyles,
  ISpinButtonStyles,
  IStackStyles,
  IStyleFunctionOrObject,
  ITextFieldStyles,
  mergeStyles,
  mergeStyleSets,
} from '@fluentui/react';

export const textFieldStyles = (required: boolean): Partial<ITextFieldStyles> => ({
  root: {
    marginRight: required ? '10px' : '0px',
  },
});

export const datePickerStyles = (required: boolean): Partial<IDatePickerStyles> => ({
  root: {
    width: '-webkit-fill-available',
  },
  wrapper: {
    marginRight: required ? '10px' : '0px',
  },
});

export const timePickerStyles = (required: boolean): Partial<IComboBoxStyles> => ({
  root: {
    display: 'inline-block',
    maxWidth: '150px',
  },
  optionsContainer: { maxHeight: 260 },
  container: {
    marginLeft: '-1px',
    maxWidth: 150,
    marginRight: required ? '10px' : '0px',
  },
});

export const optionSetStyles = (required: boolean): Partial<IComboBoxStyles> => ({
  container: {
    marginRight: required ? '10px' : '0px',
  },
});

export const stackComboBox : IStackStyles = {
  root: {
    flexFlow: 'row nowrap',
    maxWidth: 1000,
  },
};

export const lookupFormatStyles = (required: boolean):
IStyleFunctionOrObject<IBasePickerStyleProps, IBasePickerStyles> => ({
  text: {
    minWidth: 30,
    overflow: 'hidden',
    outline: 'none',
    border: '1px solid black !important',
  },
  root: {
    minWidth: 30,
    overflow: 'hidden',
    marginRight: required ? '10px' : '0px',
    backgroundColor: 'white',
  },
  input: { overflow: 'hidden' },
});

export const lookupSelectedOptionStyles: IButtonStyles = {
  root: {
    textAlign: 'left',
    padding: 0,
    fontSize: '13px',
    maxHeight: 30,
    border: 'none',
  },
  splitButtonMenuButton: {
    borderTop: 'none',
    borderBottom: 'none',
    position: 'sticky',
    right: 0,
    background: 'white',
    zIndex: 3,
    '::before': {
      position: 'absolute',
      content: '',
      top: '10px',
      right: '20px',
      width: '1px',
      height: '5px',
      color: 'rgb(200, 198, 196)',
    },
  },
  label: {
    fontWeight: 400,
  },
};

export const lookupRemoveOptionStyles:
IStyleFunctionOrObject<IIconStyleProps, IIconStyles> = {
  root: {
    position: 'sticky',
    right: 0,
    background: 'white',
    zIndex: 3,
    '::before': {
      position: 'absolute',
      content: '',
      top: '10px',
      right: '20px',
      width: '1px',
      height: '5px',
      color: 'rgb(200, 198, 196)',
    },
  },
};

export const numberFormatStyles = (required: boolean): Partial<ISpinButtonStyles> => ({
  root: {
    minWidth: '40px',
  },
  arrowButtonsContainer: {
    display: 'none',
  },
  spinButtonWrapper: {
    marginRight: required ? '10px' : '0px',
    pointerEvents: 'all',
  },
});

export const wholeFormatStyles = (required: boolean): Partial<IComboBoxStyles> => ({
  optionsContainer: {
    maxHeight: 260,
  },
  container: {
    marginRight: required ? '10px' : '0px',
  },
});

export const loadingStyles = mergeStyleSets({
  spinner: {
    height: 250,
  },
});

export const asteriskClassStyle = (required: boolean) => mergeStyles({
  color: '#a4262c',
  position: 'absolute',
  top: '5px',
  right: '1px',
  fontSize: '5.5px',
  display: required ? 'flex' : 'none',
});

export const errorTooltip =
(isInvalid: boolean, errorText: string, required: boolean, index?: number) => mergeStyles({
  display: isInvalid ? 'inline-block' : 'none',
  position: 'absolute',
  right: `${required ? '18px' : '8px'}`,
  top: '12px',
  fontSize: '16px',
  color: '#c0172b',
  cursor: 'pointer',
  '::before': {
    content: `'${errorText}'`,
    position: 'absolute',
    bottom: '140%',
    transform: `translateX(${index === 0 ? '100%' : '14%'})`,
    width: 'max-content',
    padding: '3px',
    borderRadius: '4px',
    textAlign: 'center',
    display: 'none',
    right: '100%',
    marginRight: '5px',
    background: '#fff',
    color: '#c0172b',
    border: '1px solid',
    cursor: 'default',
    zIndex: '1',
  },
  '::after': {
    content: '""',
    display: 'none',
    position: 'absolute',
    bottom: '73%',
    marginLeft: '-13px',
    border: '5px solid #c0172b transparent transparent transparent',
  },
  ':hover::before': {
    display: 'block',
  },
  ':hover::after': {
    display: 'inline-block',
  },
});

export const header = mergeStyles({
  backgroundColor: 'white',
  fontSize: '12px',
  paddingTop: '0px',
  borderTop: '1px solid rgb(215, 215, 215)',
  position: 'sticky',
  top: '44px',
  zIndex: '3',
});
