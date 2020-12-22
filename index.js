/**
 * Made by Fernando Martin on December 21st, 2020 for DaCodes
 */
const inquirer = require('inquirer')
const chalk = require('chalk')
const figlet = require('figlet')

const initialQuestions = [
    {
        type: 'input',
        name: 'test_cases',
        message: 'Input number of test cases'
    },
]

const testCaseQuestions = [
    {
        type: 'input',
        name: 'n',
        message: 'Please input the value of n'
    },
    {
        type: 'input',
        name: 'm',
        message: 'Please input the value of m'
    }
]

/**
 * Finds the direction the pointer will be facing when traversing a grid
 * @param {Number} n horizontal dimension of the grid
 * @param {Number} m vertical dimension of the grid
 */
const findDirectionFacing = (n, m) => {
    if (n > m) {
        if (m % 2 == 0) {
            console.log("U")
        } else {
            console.log("D")
        }
    } else {
        if (n % 2 == 0) {
            console.log("L")
        } else {
            console.log("R")
        }
    }
}

/**
 * Gets the grid size in terms of 'n' and 'm'
 */
const getGridSize = async () => {
    return new Promise(resolve => {
        inquirer
        .prompt(testCaseQuestions)
        .then((grid) => {
            resolve(grid)
        })
    })
}

/**
 * Retrieves information around how many tests to apply and calculates them,
 * @param {Number} testCaseLimit total number of tests
 */
const calculateTests = async (testCaseLimit) => {
    var testCases = []
        // Retrieve the grid size
        for(var i = 0; i < testCaseLimit; i++) {
            console.log(chalk.bgBlue.bold('Test case '+(i + 1)))
            let grid = await getGridSize()
            testCases.push(grid)
        }

        // Calculate and output result
        for (grid in testCases) {
            findDirectionFacing(testCases[grid].n, testCases[grid].m)
        }
}

console.log(
    chalk.cyan(
        figlet.textSync('Simple Grid Walker', {
            horizontalLayout: 'full',
            verticalLayout: 'default'
        })
    )
)
// Retrieve the test size
inquirer
    .prompt(initialQuestions)
    .then((answers) => {
        console.log('')
        let testCaseLimit = parseInt(answers.test_cases)
        calculateTests(testCaseLimit)
    })

