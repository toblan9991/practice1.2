import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
    },
    palette: {
        primary: {
          main: '#FF7A58', 
          contrastText: '#ffffff', 
        },
        secondary: {
          main: '#0038FF', 
          contrastText: '#ffffff', 
        },
        error: {
          main: '#FF4040',
        },
        warning: {
          main: '#FFAA00',
        },
        info: {
          main: '#00D9FF',
        },
        success: {
          main: '#3CDC72',
        },
        grey: {
          50: '#F5F5F5',
          100: '#ECEDED',
          200: '#84858C',
          300: '#474853',
          400: '#A0A1BA',
        }
    },
    typography:{
        fontFamily: [
            'Public Sans',
            'Arial',
            'sans-serif',
          ].join(','),
        
            h1: {
                [theme.breakpoints.down('lg')]:{
                    fontSize: 40,
                    fontWeight: 700,
                    lineHeight: 1.2, // Or '48px' 
                },

                [theme.breakpoints.down('sm')]:{
                    fontSize: 32,
                    fontWeight: 700,
                    lineHeight: 1.25, // Or '40px'
                }
                
            },
            h2: {
                [theme.breakpoints.down('lg')]:{
                    fontSize: 32,
                    fontWeight: 700,
                    lineHeight: 1.25, // Or '40px'
                },
                [theme.breakpoints.down('sm')]:{
                    fontSize: 24,
                    fontWeight: 700,
                    lineHeight: 1.33, // Or '32px'
                }
                
            },
            h3: {
                [theme.breakpoints.down('lg')]:{
                    fontSize: 24,
                    fontWeight: 700,
                    lineHeight: 1.33, // Or '32px'
                },
                [theme.breakpoints.down('sm')]:{
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: 1.4, // Or '28px'
                }
            },
            h4: {
                [theme.breakpoints.down('lg')]:{
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: 1.4, // Or '28px'
                },
                [theme.breakpoints.down('sm')]:{
                    fontSize: 18,
                    fontWeight: 600,
                    lineHeight: 1.6, // Or '26px'
                }
            },
            h5:{
                [theme.breakpoints.down('lg')]:{
                    fontSize: 18,
                    fontWeight: 600,
                    lineHeight: 1.5, // Or '24px'
                },
                [theme.breakpoints.down('sm')]:{
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: 1.5, // Or '24px'
                }
                
            },
            subtitle1:{
                fontSize: 16,
                fontWeight: 600,
                lineHeight: 1.5, // Or '24px'
            },
            subtitle2:{
                fontSize: 14,
                fontWeight: 600,
                lineHeight: 1.57, // Or '22px'
            },
            body1:{
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.5, // Or '24px'
            },
            body2:{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: 1.57, // Or '22px'
            },
            placeholder:{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: 1.5, // Or '24px'
            },
            caption:{
                fontSize: 12,
                fontWeight: 600,
                lineHeight: 1.67, // Or '20px'
            },
    
    
    
    
    },
    components:{
        MuiButton: {
            styleOverrides: {
              root: {
                // default styles here
                borderRadius: 4,
                textTransform: 'none',
                color: '#FFFFFF', 
                backgroundColor: '#FF7A58',
                '&:hover': {
                    // Hover state
                    backgroundColor: 'some-hover-color', 
                },
                '&:active': {
                    // Active state
                    backgroundColor: 'some-active-color', 
                },
                '&:disabled': {
                    // Disabled state
                    backgroundColor: 'some-disabled-color', 
                    color: 'some-disabled-text-color', 
                },
                // design includes a shadow
                boxShadow: 'none',
                '&:hover': {
                    boxShadow: 'some-hover-shadow', 
                },
              },
              sizeLarge: {
                // Large button styles
                padding: '12px 22px',
                fontSize: '1rem', // 16px
                fontWeight:600,
                lineHeight: 1.5, // Or '24px'
              },
              sizeMedium: {
                // Medium button styles
                padding: '8px 20px',
                fontSize: '.875rem', // 14px
                fontWeight:600,
                lineHeight:1.57 // Or '22px'
              },
              sizeSmall: {
                // Small button styles
                padding: '6px 18px',
                fontSize: '.75rem', // 12px
                fontWeight:600,
                lineHeight:1.67 // Or '20px'
              },
            },
        },
    }




});

export default theme;