import { createTheme } from "@mui/material";
import Helvetic from './assets/helvetica_regular.otf'


const theme = createTheme({
    palette: {
        primary: {
            main: "rgba(247, 105, 105, 1)",
            gray: "rgba(250, 250, 250, 1)",
        },
        secondary: {
            main: "rgba(255, 110, 1, 1)",
        }
    },
    typography: {
        fontFamily: 'Nunito Sans'
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
              @font-face {
                font-family: 'Helvetica';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Helvetica'), local('Helvetica-Regular'), url(${Helvetic}) format('otf');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
            `,
          },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight:'bold',
                    textTransform: 'none',
                }
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    opacity: "0.1",
                    '&.MuiBackdrop-root': {
                        opacity: "0.1",
                        color: 'blue'
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    //color: "rgba(255, 110, 1, 1)",
                    opacity: '0.5',
                    textTransform: 'none',
                    fontSize: 16,
                    fontWeight: 'bold',
                    alignItems: 'center',
                    lineHeight: 1,
                    height: 24,
                    justifyContent: 'flex-start',
                    '&.Mui-selected': {
                        color: "#000",
                        opacity:'1',
                    }
                }
            }
        },
        MuiIcon: {
            styleOverrides: {
                root: {
                    height: 50,
                    width: 50,
                    '&.MuiIcon-root': {
                        height: 50,
                        width: 50,
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    
                    boxShadow: "none",
                    '&.MuiCard-root': {
                        borderRadius: 10, 
                        bgcolor: 'rgba(250, 250, 250, 1)', 
                    }
                }
                
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    color:'rgba(255, 110, 1, 1)',
                },
                input: {
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    padding: 0,
                    color: 'rgba(255, 110, 1, 1)',
                    '&.MuiInputBase-input': {
                        backgroundColor: '#fff',
                        color: 'rgba(255, 110, 1, 1)',
                    }
                },
            }
        },
        MuiInputAdornment: {
            styleOverrides: {
                hiddenLabel: {
                    margin: 0,
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    borderRadius: 8,
                    "&:hover": {
                        //you want this to be the same as the backgroundColor above
                        backgroundColor: "white",
                    }
                },
                input: {
                    padding: 0,
                    paddingLeft: 8,
                    borderRadius: 8,
                    backgroundColor: 'white',
                    '&.placeholder': {
                        color: 'rgba(0,0,0,0.5)'
                    }
                }
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    size: 'small'
                }
            }
        },
        MuiFormControl: {
            styleOverrides: {

                root: {
                    height: '30px',
                    minWidth: '110px',
                    p:0,
                    m:0,
                    borderRadius: 8,
                },
            },
          },
          MuiInputBase: {
            styleOverrides: {

                root: {
                    height: '30px',
                    minWidth: '110px',
                    color: 'rgba(255, 110, 1, 1)',
                    alignItems: 'center',
                    m: 0,
                    padding: 0,
                    borderRadius: 8,
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    p: 0,
                    m: 0,
                    alignItems: 'center',
                    backgroundColor: 'white',
                    fontWeight:'bold',
                },
                select: {
                    padding: 0,
                    paddingLeft: 12,
                    fontWeigth: 'bold',
                    '&.MuiInputBase-input': {
                        '&.MuiFilledInput-input': {
                            
                        }
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontSize: 16,
                },
                head: {
                    fontWeight: 'bold'
                }
            }
        }
    }
})

export default theme;