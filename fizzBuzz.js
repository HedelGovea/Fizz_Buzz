document.write("<h1>Fizz Buzz</h1>");



for (i = 0; i < 15; i++) {
    fizzBuzz((i + 1));

}
 
function fizzBuzz(i) {
    if (i % 3 == 0 && i % 5 == 0) {

        document.write("Fizz Buzz <br>")


    } else if (i % 3 == 0) {
        document.write("Fizz  <br>")

    } else if (i % 5 == 0) {
        document.write("Buzz  <br>")
    } else {
        return document.write((i) + "<br>");
    }
}