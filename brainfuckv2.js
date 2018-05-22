#!/usr/bin/env node

const fs = require('fs')
var interpreteur = ''
var table = [0]
var actual = 0
var for_ = ''
process.argv.forEach(function (val, index, array) {
    if(val.substr(0, 4) === 'file'){
        fs.readFile(val.substr(5), 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            /***
             * ALL STARTS HERE
             */

            for(i = 0; i <= data.length - 1; i++){
                switch(data[i]){
                    case ">":
                        actual++
                        if(table[actual] === undefined){
                            table[actual] = 0
                        }
                        break

                    case "<":
                        if(actual !== 0){
                            actual--
                        }
                        break

                    case ".":
                        console.log(table[actual])
                        break

                    case "+":
                        table[actual] += 1
                        break

                    case "-":
                        table[actual] += -1
                        break

                    case "[":
                        for_ = i
                        // for(o = i; o <= data.indexOf(']'); o++){
                        //     switch (data[o]){
                        //         case
                        //     }
                        // }
                        break

                    case "]":
                        if(table[actual] !== 0){
                            i = for_
                        }
                        break

                    case "$":
                        console.log(String.fromCharCode(table[actual]))
                        break
                }
            }

        });
    }
});