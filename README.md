# Hooks

1 useContext

- Reemplaza a "useState" para consumir estados y metodos del context

2 ThemeProvider

- usado como valor inicial en "useContext" de cada componente

## Creación de contexto y provider

1 createContext() - creation of context
2 ThemeProvider({children}) - creation of provider
3 data - obj whith for the props to context

## Return

4 ThemeContext.Provider => contexto para usar el los components
5 children - contenido de los componentes donde se use el "provider"

## Export

- export {ThemeProvider} - provider
- export default ThemeContext - context
