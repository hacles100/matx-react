import { AppBar,ThemeProvider, Toolbar, styled, useTheme } from '@mui/material';
import useSettings from 'app/hooks/useSettings';
import { topBarHeight } from 'app/utils/constant';

const AppFooter = styled(Toolbar)(() => ({
  display: 'flex',
  alignItems: 'center',
  minHeight: topBarHeight,
  '@media (max-width: 499px)': {
    display: 'table',
    width: '100%',
    minHeight: 'auto',
    padding: '1rem 0',
    '& .container': {
      flexDirection: 'column !important',
      '& a': { margin: '0 0 16px !important' }
    }
  }
}));

const FooterContent = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '0px 1rem',
  maxWidth: '1170px',
  margin: '0 auto'
}));

const Footer = () => {
  const theme = useTheme();
  const { settings } = useSettings();

  const footerTheme = settings.themes[settings.footer.theme] || theme;

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar color="primary" position="static" sx={{ zIndex: 96 }}>
        <AppFooter>
          <FooterContent>
          </FooterContent>
        </AppFooter>
      </AppBar>
    </ThemeProvider>
  );
};

export default Footer;
