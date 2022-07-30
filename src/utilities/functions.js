const createID = () => {
  return Math.floor(Math.random() * 10000000000).toString();
};

const convertDataPost = (program) => {
  const objetData = {
    id: program.idProgram,
    name: program.nameProgram,
    description: program.descriptionProgram,
    nodes: JSON.stringify(program.nodesProgram),
    drawflow: JSON.stringify(program.drawflowProgram),
    code: program.pythonCode,
  };
  return objetData;
};

export { createID, convertDataPost };
