declare module '*.m.less' {
  interface LessModuleExport {
    [key: string]: string
  }
  let lessModuleExport: LessModuleExport
  export default lessModuleExport
}
