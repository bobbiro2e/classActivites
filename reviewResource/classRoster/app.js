$(document).ready(function () {
    var studentEnrollmentCount = 0;

    function updateStudentEnrollment() {
        studentEnrollmentCount++;
        $("h2").text("student enrollment: " + studentEnrollmentCount)
    }

    $("button").on("click", function (event) {
        event.preventDefault();
        var studentName = $("input").val();
        var tr = $("<tr>");
        var td = $("<td>");
        td.text(studentName);
        tr.append(td)
        $("table").append(tr);
        $("input").val(" ");
        updateStudentEnrollment();
    });

});