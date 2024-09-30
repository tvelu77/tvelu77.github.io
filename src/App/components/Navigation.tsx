import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Paper from '@mui/material/Paper';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
    const { t } = useTranslation();
    const [value, setValue] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>(null);
    const location = useLocation();

    React.useEffect(() => {
        const path = location.pathname;
        switch (path) {
            case '/':
                setValue(0);
                break;
            case '/projects':
                setValue(1);
                break;
            case '/experiences':
                setValue(2);
                break;
            default:
                setValue(-1);
                break;
        }
    }, [location]);

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <Paper 
                sx={{ 
                    position: 'fixed', 
                    bottom: 0, 
                    left: 0, 
                    right: 0, 
                    zIndex: 1000
                }} 
                elevation={3}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction
                        label={t("bottom-nav.about-me")}
                        icon={<AccountBoxIcon />}
                        component={Link}
                        to="/"
                    />
                    <BottomNavigationAction
                        label={t("bottom-nav.projects")}
                        icon={<WebAssetIcon />}
                        component={Link}
                        to="/projects"
                    />
                    <BottomNavigationAction
                        label={t("bottom-nav.experiences")}
                        icon={<ViewTimelineIcon />}
                        component={Link}
                        to="/experiences"
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    ); 
}
