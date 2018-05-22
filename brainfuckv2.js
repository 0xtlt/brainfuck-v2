#!/usr/bin/env node

const fs = require('fs')
var interpreteur = ''
var table = [0]
var actual = 0
var for_ = 0
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
                        if(table[actual] < 31){
                            console.log(table[actual])
                        } else {
                            console.log(String.fromCharCode(table[actual]))
                        }
                        break

                    case "+":
                        table[actual] += 1
                        break

                    case "-":
                        table[actual] += -1
                        break

                    case "[":
                        for_ = i
                        break

                    case "]":
                        if(table[actual] !== 0){
                            i = for_
                        }
                        break

                    case "'":
                            var point = 'a'
                            var point_a = actual
                            var point_b = actual
                            for(o = 1; o <= 99999; o++){
                                switch(data[i+ o]){
                                    case "<":
                                        if(point === 'a'){
                                            point_a--
                                        } else {
                                            point_b--
                                        }
                                        break

                                    case ">":
                                        if(point === 'a'){
                                            point_a++
                                        } else {
                                            point_b++
                                        }
                                        break

                                    case "*":
                                        point = 'b'
                                        break

                                    case "'":
                                        table[actual] = table[point_a] * table[point_b]
                                        i += o
                                        o = 99999
                                        break
                                }
                            }
                        break

                    case '"':
                        var point = 'a'
                        var point_a = i + 1
                        var point_b = i
                        for(o = 1; o <= 9; o++){
                            if(data[i + o] == '"') {
                                point_b += o
                                o = 9
                            }
                        }
                        var where = 0
                        var somme = 0
                        for(v = point_b; v >= point_a; v--){
                            if(data[v] == 1){
                                if(where === 0){
                                    somme = somme + 1
                                } else {
                                    somme = somme + where * 2
                                }
                            }
                            if(where === 0){
                                where++
                            } else {
                                where = where * 2
                            }
                        }
                        table[actual] = somme
                        i = point_b
                        break

                    case "$":
                        console.log(table[actual])
                        break
                }
            }

        });
    } else if(val === '-v'){
        console.log('BrainFuck 1.8.2')
    }
});