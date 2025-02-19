import React from 'react'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { toggleDrawer } from '../../reducers/layout'
import Box, { BoxProps } from '@mui/material/Box'
import Screens from './Screens'
import Toolbar from './Toolbar'
import { styled, darken, lighten } from '@mui/material/styles'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectDrawer } from '../../reducers/layout'
import Button from '@mui/material/Button'

interface Props extends BoxProps {
  open: boolean
}
const Drawer = styled(({ open, ...rest }: Props) => <Box {...rest} />)(
  ({ theme, open }) => ({
    position: 'relative',
    width: open ? 225 : 60,
    background: darken(theme.palette.background.default, 0),
    borderRight: `1px solid ${lighten(theme.palette.background.default, 0.2)} `,
    display: 'flex',
    flexDirection: 'column',
  })
)

const Sidebar = () => {
  const dispatch = useDispatch()
  const open = useAppSelector(selectDrawer)
  const handleToggle = () => {
    dispatch(toggleDrawer())
  }

  return (
    <Drawer open={open}>
      <Button onClick={handleToggle}>
        {open ? <ChevronLeft /> : <ChevronRight />}
      </Button>

      <Toolbar direction={open ? 'row' : 'column'} />

      <Screens view={open ? 'list' : 'popover'} />
    </Drawer>
  )
}

export default Sidebar
