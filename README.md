# Brainfuck-v2
### Install brainfuckv2
`npm install -g brainfuckv2`

### Start your brainfuckv2 program
Run `brainfuckv2 file=test.bfk` in cmd

### Know the installed version
Run `brainfuckv2 -v` in cmd

### Write an brainfuckv2 program
Example : `++>++<++>--[+].`

### Features table

character | what he does
----------|-------------
`>` | Go to next pointer
`<` | Return to the previous point
`+` | Add 1 to the actual value where you are
`-` | Remove 1 to the actual value where you are
`.` | Display the character associated with the value where is located the pointer
`$` | Display the value where is located the pointer
`[]` | Execute what is between [] as long as the final value is not 0
`'<<*<<'` | Multiply 2 values
`"01010101"` | Binary up to 8 bits