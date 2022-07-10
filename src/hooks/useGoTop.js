import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const useGoTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
      window.scrollTo(0, 0)
    },[pathname])
  }

  export default useGoTop