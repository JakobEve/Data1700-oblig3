$(() => {
    $("#kjopBillett").click(() => {
        const filmer = $("#filmer");
        const antallBilletter = $("#antallBilletter");
        const fornavn = $("#fornavn");
        const etternavn = $("#etternavn");
        const telefonnr = $("#telefonnr");
        const epost = $("#epost");

        const billett = {
            filmer: filmer.val(),
            antallBilletter: antallBilletter.val(),
            fornavn: fornavn.val(),
            etternavn: etternavn.val(),
            telefonnr: telefonnr.val(),
            epost: epost.val()
        };

        // Fjerne eksisterende feil
        $(".error").removeClass("error");

        if (inputval(billett)) {
            $.post("/bestillinger", billett, function () {
                $.get("/bestillinger", function (billetter) {
                    formater(billetter);
                });
            });
            filmer.val("");
            antallBilletter.val("");
            fornavn.val("");
            etternavn.val("");
            telefonnr.val("");
            epost.val("");
        } else {
            // Legg til is-invalid på feltene som mangler verdi
            if (billett.filmer === "") {
                filmer.addClass("error");
            }
            if (billett.antallBilletter === "") {
                antallBilletter.addClass("error");
            }
            if (billett.fornavn === "") {
                fornavn.addClass("error");
            }
            if (billett.etternavn === "") {
                etternavn.addClass("error");
            }
            if (billett.telefonnr === "" || !(/^\d{8}$/.test(billett.telefonnr))) {
                telefonnr.addClass("error");
            }
            if (billett.epost === "" || !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(billett.epost))) {
                epost.addClass("error");
            }
            console.log("Mangler input");
        }
    });

    $("#slettBilletter").click(() => {
        $.ajax("/bestillinger", {
            type: 'DELETE',
            success: () => hent(),
            error: (jqXhr, textStatus, errorMessage) => console.log(errorMessage)
        });
    });
});

const hent = () => $.get("/bestillinger", billetter => formater(billetter));

const inputval = billett => {
    if (billett.filmer === "") return false
    else if (billett.antallBilletter === "") return false
    else if (billett.fornavn === "") return false
    else if (billett.etternavn === "") return false
    else if (billett.telefonnr === "") return false
    else if (!(/^\d{8}$/.test(billett.telefonnr))) return false
    else if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(billett.epost))) return false;
    else return billett.epost !== "";
}

const formater = billetter => {
    let ut = "<table class='table table-striped'><tr><th>Film</th><th>Antall Billetter</th><th>Fornavn</th><th>Etternavn</th>" +
        "<th>Telefonnr</th><th>Epost</th></tr>";
    for (let ticket of billetter) {
        ut += "<tr><td>" + ticket.filmer + "</td><td>" + ticket.antallBilletter + "</td><td>" + ticket.fornavn + "</td><td>" + ticket.etternavn + "</td>" +
            "<td>" + ticket.telefonnr + "</td><td>" + ticket.epost + "</td></tr>";
    }
    ut += "</table>";
    $("#alleBilletter").html(ut);
}
