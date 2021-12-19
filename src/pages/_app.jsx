import '../styles/globals.css'
import {theme} from "../components/theme"
import { ThemeProvider } from '@material-ui/core'

function MyApp({ Component, pageProps }) {
  return(
 
      <Component {...pageProps} />

  
  )
  
 
}

export default MyApp
