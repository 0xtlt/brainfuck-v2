# Brainfuck-v2
### Install brainfuckv2
`npm install -g brainfuckv2`

### Start your brainfuckv2 program
Run `brainfuckv2 file=test.bfk` in cmd

### Write an brainfuckv2 program
Example : `++>++<++>--[+].`

### Features table

character | what he does
----------|-------------
`>` | Go to next pointer
`<` | Return to the previous point
`+` | Add 1 to the actual value where you are
`-` | Remove 1 to the actual value where you are
`.` | Display the value where is located the pointer
`[]` | Execute what is between [] as long as the final value is not 0