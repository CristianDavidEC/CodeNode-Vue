import useProgramStore from "../store/program.js"
import { convertDataPost } from "../utilities/functions.js"

const programStore = useProgramStore()
//const url = 'http://localhost:3080/'
const url = "https://18jypoqcu5.execute-api.us-east-1.amazonaws.com/staging"

/**
 * Petition to get all programs
 */
const getAllPrograms = (loadProgramsCard) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }

  fetch(url, options)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      loadProgramsCard(data)
    })
}

/**
 * Petition to get a program by id
 */
const getProgram = async (idProgram) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
  const paramsQuery = new URLSearchParams({
    id: idProgram,
  })

  await fetch(`${url}?${paramsQuery}`, options)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      programStore.setProgram(data)
    })
}

/**
 * Petition to save a new program
 */
const saveProgram = async (launchNotification) => {
  let newProgram = convertDataPost(programStore)
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProgram),
  }
  await fetch(`${url}`, options).then((response) => {
    launchNotification(response.status)
  })
}

/**
 * Delete program by id
 */
const deleteProgram = async (idProgram, launchNotification) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }

  const paramsQuery = new URLSearchParams({
    id: idProgram,
  })

  await fetch(`${url}?${paramsQuery}`, options).then((response) => {
    launchNotification(response.status)
  })
}

/**
 * Petition run python code and get the result of the program
 */
const runCode = async () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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

export { getAllPrograms, getProgram, saveProgram, deleteProgram, runCode }
