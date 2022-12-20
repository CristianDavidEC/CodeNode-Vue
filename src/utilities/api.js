import useProgramStore from "../store/program.js"
import { convertDataPost } from "../utilities/functions.js"

const programStore = useProgramStore()
//const url = 'http://localhost:3080/'
const url = "https://18jypoqcu5.execute-api.us-east-1.amazonaws.com/staging"

/**
 * Petition to get all programs
 */
const getAllPrograms = async (loadProgramsCard) => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }

  await fetch(url, options)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      loadProgramsCard(data.getAllPrograms)
    })
}

/**
 * Petition to get a program by id
 */
const getProgram = async (idProgram) => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }
  await fetch(`${url}/{idProgram}`, options)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      programStore.setProgram(data.getProgram[0])
    })
}

/**
 * Petition to save a new program
 */
const saveProgram = async (launchNotification) => {
  let newProgram = convertDataPost(programStore)
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProgram),
  }
  await fetch(`${url}`, options).then((response) => {
    launchNotification(response.status)
  })
}

/**
 * Petition run python code and get the result of the program
 */
const runCode = async () => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code: programStore.pythonCode }),
  }
  await fetch(`${url}/runcode`, options)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      programStore.pythonCode = data.code
    })
}

export { getAllPrograms, getProgram, saveProgram, runCode }
