import useProgramStore from "../store/program.js";
const programStore = useProgramStore();

const nodesToPython = (nodesProgram) => {
  let code = ``;

  for (const node of nodesProgram) {
    const { parentNode, pythonCode } = node;
    if (!parentNode) {
      code += `${pythonCode} \n`;
    }
  }
  programStore.addPythonCode(code);
};

export default nodesToPython;
