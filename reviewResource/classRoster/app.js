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
        var avatar = $("<img>");
        var avatarURL = "https://api.adorable.io/avatars/285/" + studentName + "@adorable.png";
        avatar.attr("src", avatarURL);
        avatar.addClass("avatarIMG");
        td.append(avatar);
        td.append(studentName);
        tr.append(td)
        $("table").append(tr);
        $("input").val(" ");
        updateStudentEnrollment();
    });

});