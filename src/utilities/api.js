import useProgramStore from "../store/program.js";
import { convertDataPost } from "../utilities/functions.js";

const programStore = useProgramStore();
const url = "http://localhost:3080/";

const getAllPrograms = async () => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  await fetch(`${url}get-all-programs`, options).then((response) => {
    console.log(response);
  });
};

const getProgram = async (idProgram) => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  await fetch(`${url}get-program/${idProgram}`, options).then((response) => {
    console.log(response);
  });
};

const saveProgram = async () => {
  let dataProgram = convertDataPost(programStore);
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: dataProgram,
  };
  console.log(programStore);
  await fetch(`${url}save-program`, options).then((response) => {
    console.log(response);
  });
};

const runCode = async () => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Code: programStore.pythonCode }),
  };
  console.log(options);
  await fetch(`${url}run-code`, options).then((response) => {
    console.log(response);
  });
};

export { getAllPrograms, getProgram, saveProgram, runCode };
