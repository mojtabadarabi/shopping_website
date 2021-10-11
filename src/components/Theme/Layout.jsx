import React from 'react'
import '../../assets/styles.css'
import rtl from 'jss-rtl';
import { create } from 'jss';
import  {customTheme}  from '../../assets/CustomTheme'
import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/styles';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function Layout({children}) {
    
    return (
        <ThemeProvider  theme={customTheme}>
            <StylesProvider jss={jss}>
            {children}
            </StylesProvider>
        </ThemeProvider>
    )
}

export default Layout
