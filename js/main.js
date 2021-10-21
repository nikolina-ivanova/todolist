const toggleMode = () => {
    const toggleBtn = document.getElementById("switch");
    if(toggleBtn.checked){
        document.documentElement.setAttribute('data-theme', 'dark')
    }
    else
    document.documentElement.setAttribute('data-theme', 'light')
};

