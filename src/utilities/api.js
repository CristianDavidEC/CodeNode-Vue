import useProgramStore from '../store/program.js'
import { convertDataPost } from '../utilities/functions.js'

const programStore = useProgramStore()
const url = 'http://localhost:3080/'

/**
 * Petition to get all programs
 */
const getAllPrograms = async (loadProgramsCard) => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }

  await fetch(`${url}get-all-programs`, options)
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
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
  await fetch(`${url}get-program/${idProgram}`, options)
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
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProgram),
  }
  await fetch(`${url}save-program`, options).then((response) => {
    launchNotification(response.status)
  })
}

/**
 * Petition run python code and get the result of the program
 */
const runCode = async () => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: programStore.pythonCode }),
  }
  await fetch(`${url}run-code`, options)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      programStore.pythonCode = data.code
    })
}

export { getAllPrograms, getProgram, saveProgram, runCode }
