jQuery(function ($) {
    $(document).ready(function () {
        $.getJSON("json/resume-info.json", function (data){
            console.log("success");
            // Grab the container
            let container = $('#container');

            ///////////////////////////// Contacts //////////////////////////////////////////
            // Create contact info element
            let contactInfo = $('<div class="row contact-info"></div>');
            // Loop through contact info
            for (let contact in data["contacts"]) {
                // Create current contact element
                let thisContact = $(`<div class="col-md-4"></div>`);
                // Create contact label and value
                let label = $(`<div class="text-uppercase">${contact}</div>`);
                let value = `<a href="${data["contacts"][contact]['url']}">${data["contacts"][contact]['value']}</a>`;
                // Add them to the contact element
                thisContact.append(label);
                thisContact.append(value);
                // Add the contact element to the
                contactInfo.append(thisContact);
            }
            // Add the contact info element to the page
            container.append(contactInfo);

            // Add title
            container.append('<h1><a href="resume.html">Resume</a> - Portfolio</h1>');

            // Add break
            container.append($('<div class="row"><div class="col-md-12"><hr></div></div>'));

            // Add name
            container.append($('<h2>Killashandra Scheuring</h2>'));

            // Add image
            container.append($('<img class="img-responsive img-rounded  img-center" src="http://placekitten.com/200/200">'));

            // Add break
            container.append($('<div class="row"><div class="col-md-12"><hr></div></div>'));

            container.append($('<div class="col-md-12 text-capitalize"><h2 class="text-muted">Projects</h2></div>'));

            let projectContainer = $('<div class="row" id="projects"></div>');

            let modals = $('<div></div>');

            for(let project of data["projects"]){
                projectContainer.append($(`
<div class="col-md-3 project">
    <h5>
        <a href="${project['url']}">${project['title']} ${project["phoneFriendly"] ? '- Phone Friendly' : ''}</a>
    </h5>
    <img class="img-responsive clickable-img" src="${project['img']}" alt="${project['id'].replace(/-/g, '')}" width="200" height="200" data-toggle="modal" data-target="#${project['id']}">
</div>`));
                modals.append($(`
<div class="modal fade" id="${project['id']}" tabindex="-1" role="dialog" aria-labelledby="${project['id']}-label" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="${project['id']}-label">${project['title']}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            <img class="img-responsive" src="${project['img']}" alt="${project['id'].replace(/-/g, '')}" width="100" height="100">
            <a href="${project['url']}">link to project</a>
                <p>${project["description"]}</p>
            </div>
        </div>
    </div>
</div>`));
            }
            container.append(projectContainer);
            container.append(modals);
        });
    });
});
