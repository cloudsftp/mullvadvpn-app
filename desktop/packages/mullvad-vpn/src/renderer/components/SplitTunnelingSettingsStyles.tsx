import styled from 'styled-components';

import { colors } from '../../config.json';
import { Spacings } from '../lib/foundations';
import * as AppButton from './AppButton';
import * as Cell from './cell';
import { measurements, normalText } from './common-styles';
import ImageView from './ImageView';
import { NavigationScrollbars } from './NavigationBar';
import SearchBar from './SearchBar';
import { SmallButton } from './SmallButton';

export const StyledPageCover = styled.div<{ $show: boolean }>((props) => ({
  position: 'absolute',
  zIndex: 2,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.5,
  display: props.$show ? 'block' : 'none',
}));

export const StyledNavigationScrollbars = styled(NavigationScrollbars)({
  flex: 1,
});

export const StyledCellButton = styled(Cell.CellButton)<{ $lookDisabled?: boolean }>((props) => ({
  '&&:not(:disabled):hover': {
    backgroundColor: props.$lookDisabled ? colors.blue : undefined,
  },
}));

interface DisabledApplicationProps {
  $lookDisabled?: boolean;
}

const disabledApplication = (props: DisabledApplicationProps) => ({
  opacity: props.$lookDisabled ? 0.6 : undefined,
});

export const StyledIcon = styled(Cell.UntintedIcon)<DisabledApplicationProps>(disabledApplication, {
  marginRight: Spacings.spacing4,
});

export const StyledActionIcon = styled(ImageView)({
  marginLeft: Spacings.spacing3,
});

export const StyledCellWarningIcon = styled(Cell.Icon)({
  marginLeft: Spacings.spacing3,
  marginRight: Spacings.spacing1,
});

export const StyledCellLabel = styled(Cell.Label)<DisabledApplicationProps>(
  disabledApplication,
  normalText,
  {
    fontWeight: 400,
    wordWrap: 'break-word',
    overflow: 'hidden',
  },
);

export const StyledIconPlaceholder = styled.div({
  width: '35px',
  marginRight: Spacings.spacing4,
});

export const StyledSpinnerRow = styled(Cell.CellButton)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${Spacings.spacing3} 0`,
  marginBottom: measurements.rowVerticalMargin,
  background: colors.blue40,
});

export const StyledBrowseButton = styled(AppButton.BlueButton)({
  margin: `0 ${measurements.horizontalViewMargin} ${measurements.verticalViewMargin}`,
});

export const StyledNoResult = styled(Cell.CellFooter)({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 0,
  marginTop: 0,
  marginBottom: Spacings.spacing9,
});

export const StyledNoResultText = styled(Cell.CellFooterText)({
  textAlign: 'center',
});

export const StyledSearchBar = styled(SearchBar)({
  marginLeft: measurements.horizontalViewMargin,
  marginRight: measurements.horizontalViewMargin,
  marginBottom: measurements.buttonVerticalMargin,
});

export const WideSmallButton = styled(SmallButton)({
  width: '100%',
});
