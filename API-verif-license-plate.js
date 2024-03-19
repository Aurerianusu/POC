//verify response
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Vérification du timeout
pm.test("Response must be fast", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000); // Temps en ms
});

//verify specifications
pm.test("Brand is NISSAN", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.specifications.brand).to.eql("NISSAN");
});

pm.test("Model is MICRA", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.specifications.model).to.eql("MICRA");
});

pm.test("Energy is GASOIL", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.specifications.energy).to.eql("GASOIL");
});

pm.test("Tax horsepower is 5", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.specifications.tax_horsepower).to.be.eql(5);
});

//verify versions
pm.test("First registration date is correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.specifications.first_registration_date).to.eql("2009-04-23");
});

pm.test("Last registration date is correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.specifications.last_registration_date).to.eql("2009-04-23");
});


//verify version
pm.test("Versions are correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.versions[0].version).to.eql("NISSAN MICRA 1.5 DCI 86 25E ANNIVERSAIRE");
    pm.expect(jsonData.versions[1].version).to.eql("NISSAN MICRA 1.5 DCI 86 CONNECT EDITION");
    pm.expect(jsonData.versions[0].is_utility).to.be.false;
    pm.expect(jsonData.versions[1].is_utility).to.be.false;
});
//verify IDS
pm.test("IDs for versions are correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.versions[0].ids).to.eql(["NA05312"]);
    pm.expect(jsonData.versions[1].ids).to.eql(["NA05327"]);
});
