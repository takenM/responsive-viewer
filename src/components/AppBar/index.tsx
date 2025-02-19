import MuiAppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import AddressBar from './AddressBar'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import HelpIcon from '@mui/icons-material/Help'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import CloseIcon from '@mui/icons-material/Close'

import AppLogo from '../AppLogo'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import {
  toggleDrawer,
  toggleHelpDialog,
  toggleScreenDialog,
} from '../../reducers/layout'
import { styled, lighten } from '@mui/material/styles'
import Tools from './Tools'

const AppBarView = styled(MuiAppBar)(({ theme }) => ({
  borderBottom: `1px solid ${lighten(theme.palette.background.default, 0.2)} `,
  [theme.breakpoints.down('md')]: {
    minWidth: 750,
  },
}))
const Logo = styled(AppLogo)(() => ({
  width: 40,
  height: 'auto',
  flexShrink: 0,
  objectFit: 'contain',
}))
const CloseButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 0,
  margin: `${theme.spacing(-1, -1, -1, 1)} !important`,
  padding: theme.spacing(2),
  borderLeft: `1px solid ${lighten(theme.palette.background.default, 0.2)}`,
  backgroundColor: lighten(theme.palette.background.default, 0.05),
}))

const AppBar = () => {
  const dispatch = useAppDispatch()

  return (
    <AppBarView position="static" color="default">
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        sx={{
          padding: 1,
        }}
      >
        <Stack spacing={2} direction="row">
          <Logo
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => dispatch(toggleDrawer())}
          />
          <AddressBar />
        </Stack>

        <Tools />

        <Stack spacing={1} direction="row">
          <IconButton
            onClick={() => dispatch(toggleHelpDialog())}
            edge="end"
            aria-label="Add Screen"
            aria-haspopup="true"
            color="inherit"
          >
            <HelpIcon />
          </IconButton>

          <IconButton
            onClick={() => dispatch(toggleScreenDialog())}
            edge="end"
            aria-label="Add Screen"
            aria-haspopup="true"
            color="inherit"
          >
            <AddIcon />
          </IconButton>

          {process.env.REACT_APP_PLATFORM !== 'LOCAL' && (
            <CloseButton
              onClick={() => window.location.reload()}
              edge="end"
              aria-label="Add Screen"
              aria-haspopup="true"
              color="inherit"
            >
              <CloseIcon />
            </CloseButton>
          )}
        </Stack>
      </Stack>
    </AppBarView>
  )
}

export default AppBar
