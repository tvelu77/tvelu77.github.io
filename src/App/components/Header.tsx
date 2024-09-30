import Box from '@mui/material/Box';
import { AppBar, createTheme, FormControlLabel, MenuItem, Select, Toolbar, Typography, useColorScheme } from '@mui/material';
import { LightSwitch } from './LightSwitch';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { lngs } from 'i18n';

export function Header() {
  const { mode, setMode } = useColorScheme();
  const { t, i18n } = useTranslation();
  if (!mode) {
    return null;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            {t('header.title')}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Select
              value={i18n.language}
              onChange={(event) => i18n.changeLanguage(event.target.value)}
              sx={{ marginRight: 2 }}
            >
              {Object.keys(lngs).map((lng) => (
                <MenuItem key={lng} value={lng}>{lng}</MenuItem>
              ))}
            </Select>
            <FormControlLabel
              control={
                <LightSwitch
                  checked={mode === 'dark'}
                  onChange={(event) => setMode(event.target.checked ? 'dark' : 'light')}
                />
              }
              label=""
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export const theme = createTheme({
    colorSchemes: {
      dark: true,
    },
  });