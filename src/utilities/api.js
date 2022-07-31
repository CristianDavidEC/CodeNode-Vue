import useProgramStore from "../store/program.js";
import { convertDataPost } from "../utilities/functions.js";

const programStore = useProgramStore();
const url = "http://localhost:3080/";

const getAllPrograms = async (callback) => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  await fetch(`${url}get-all-programs`, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callback(data.getAllPrograms);
    });
};

const getProgram = async (idProgram) => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  await fetch(`${url}get-program/${idProgram}`, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

const saveProgram = async () => {
  let dataProgram = convertDataPost(programStore);
  console.log(dataProgram);
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: dataProgram,
  };
  await fetch(`${url}save-program`, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

const runCode = async () => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Code: programStore.pythonCode }),
  };
  await fetch(`${url}run-code`, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      programStore.pythonCode = data.code;
    });
};

export { getAllPrograms, getProgram, saveProgram, runCode };
