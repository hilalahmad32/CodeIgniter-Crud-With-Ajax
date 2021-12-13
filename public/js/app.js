$(document).ready(function () {

    // get Data
    const displayData = () => {
        $.ajax({
            url: "/getData",
            type: "GET",
            success:(data) => {
                $("#get-data").html(data);
            }
        })
    }
    displayData();
    // insert data
    $("#save").on("click", function (e) {
        e.preventDefault();
        const name = $("#name").val();
        const age = $("#age").val();
        const country = $("#country").val();
        if (country == "" || age == "" || name == "") {
            alert("Please Fill All Field");
        } else {
            $.ajax({
                url: "/addStudent",
                type: "POST",
                data: {
                    name: name,
                    age: age,
                    country: country,
                },
                success: (data) => {
                    if (data == 1) {
                        alert("Data add successfully")
                        $("#myModal").modal("hide");
                        $("#name").val("");
                        $("#age").val("");
                        $("#country").val("");
                        displayData();
                    } else {
                        alert("Some Problem")
                    }
                }
            })
        }
    });


    $(document).on("click","#delete",function(){
        const id=$(this).data("id");
        $.ajax({
            url: "/deleteData",
            type: "POST",
            data:{id:id},
            success:(data) => {
                if (data == 1) {
                    alert("Data Delete successfully")
                    
                    displayData();
                } else {
                    alert("Some Problem")
                }
            }
        })
    })


    $(document).on("click","#edit",function(){
        const id=$(this).data("id");
        $.ajax({
            url: "/editData",
            type: "POST",
            data:{id:id},
            success:(data) => {
               $("#edit-data").html(data);
            }
        })
    })

    $("#update").on("click", function (e) {
        e.preventDefault();
        const id = $("#id").val();
        const name = $("#edit_name").val();
        const age = $("#edit_age").val();
        const country = $("#edit_country").val();
        if (country == "" || age == "" || name == "") {
            alert("Please Fill All Field");
        } else {
            $.ajax({
                url: "/updateData",
                type: "POST",
                data: {
                    id:id,
                    name: name,
                    age: age,
                    country: country,
                },
                success: (data) => {
                    if (data == 1) {
                        alert("Data Update successfully")
                        $("#editStudent").modal("hide");
                        $("#id").val("");
                        $("#edit_name").val("");
                        $("#edit_age").val("");
                        $("#edit_country").val("");
                        displayData();
                    } else {
                        alert("Some Problem")
                    }
                }
            })
        }
    });
})