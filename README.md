How to apply theme
1 : create a file as MyThemeProvider in utils
2 : import ThemeProvider from "next-themes"
3 : import MyThemeProvider in layout page
update it like this
<MyThemeProvider attribute="class" defaultTheme="system" enableSystem>
{children}
</MyThemeProvider>

4 : add darkMode: ["class"], in tailwind.config.js file
5 : <p className="text-3xl text-blue-600 dark:text-red-500">Hello there</p>
Happy Theme :)
