'use strict'
const csv = require('csv')
const fs = require('fs')

const CODES = [
    {
        code: 'dsfawer',
        pin: '123',
        expiry: Date.now()
    },
    {
        code: 'sdfsdf',
        pin: '457',
        expiry: Date.now()
    },
]

const writeStream = fs.createWriteStream('./removed-codes.csv')
const writeToCSV = (CODES) => csv.stringify(CODES).pipe(writeStream)
