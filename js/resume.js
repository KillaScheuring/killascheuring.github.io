jQuery(function ($) {
    $(document).ready(function () {
        console.log("Get data");
        $.getJSON("json/resume-info.json", function (data) {
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
            container.append('<h1>Resume - <a href="index.html">Portfolio</a></h1>');

            // Add break
            container.append($('<div class="row"><div class="col-md-12"><hr></div></div>'));

            // Add name
            container.append($('<h2>Killashandra Scheuring</h2>'));

            // Add break
            container.append($('<div class="row"><div class="col-md-12"><hr></div></div>'));

            // Add section label
            container.append('<div class="row group"><h2 class="text-capitalize text-muted">Skills at a glance</h2></div>');

            /////////////////////////////// Skills ///////////////////////////////////////
            // Create skills container
            let skillsContainer = $('<div class="row group"></div>');
            // Loop through skills
            for (let skill in data["skills"]) {
                // Create container for the current skill group
                let thisSkillContainer = $('<div class="col-md-4"></div>');
                // Add label
                thisSkillContainer.append(`<h5 class="text-capitalize">${skill}</h5>`);
                // Create list element for the current skill group
                let thisSkillList = $('<ul class="list level1"></ul>');
                // Loop through skills in the current skill group
                for (let item in data["skills"][skill]) {
                    // Check if there are sub skills in this skill
                    if (typeof data["skills"][skill][item] === "object") {
                        // Create current skill list item element
                        let thisSkill = $(`<li><a href="${data["skills"][skill][item]["url"]}">${item}</a></li>`);
                        // Add sub skill list element
                        let subSkillList = $('<ul class="level2"></ul>');
                        // Loop through sub skills in the current skill
                        for (let subSkill in data["skills"][skill][item]["subSkills"]) {
                            // Create the list element for the current sub skill
                            subSkillList.append(`<li><a href="${data["skills"][skill][item][subSkill]}">${subSkill}</a></li>`)
                        }
                        // Add the sub skill list to the skill list item element
                        thisSkill.append(subSkillList);
                        // Add the current skill to the skill group list
                        thisSkillList.append(thisSkill);
                    } else {
                        // Add the current skill to the skill group list
                        thisSkillList.append(`<li><a href="${data["skills"][skill][item]}">${item}</a></li>`);
                    }
                }
                // Add the skill group list to the skill group container
                thisSkillContainer.append(thisSkillList);
                // Add the skill group container to the skills container
                skillsContainer.append(thisSkillContainer);
            }
            // Add the skills container to the page
            container.append(skillsContainer);

            // Add break
            container.append($('<div class="row"><div class="col-md-12"><hr></div></div>'));

            ////////////////////// Work Experience /////////////////
            let modals = $('<div></div>');
            container.append('<div class="row group"><h2 class="text-capitalize text-muted">Work Experience</h2></div>');
            let workExperienceContainer = $('<div class="row group"></div>');
            for (let jobInfo of data["workExperience"]) {
                let thisJob = $('<div class="job"></div>');
                let thisJobId = (jobInfo["employer"] + jobInfo["title"]).replace(/ /g, "").replace(/,/g, "");
                console.log(thisJobId);
                thisJobId = thisJobId.slice(0, 1).toLowerCase() + thisJobId.slice(1, thisJobId.length-1);
                thisJob.append(`<a class="job-title" data-toggle="modal" data-target="#${thisJobId}">${jobInfo["employer"]} - ${jobInfo["title"]}</a>`);
                thisJob.append(`<div class="years-employed">${jobInfo["yearStarted"]} - ${jobInfo["yearEnded"] ? jobInfo["yearEnded"] : "present"}</div>`)
                workExperienceContainer.append(thisJob);
                modals.append($(`
<div class="modal fade" id="${thisJobId}" tabindex="-1" role="dialog" aria-labelledby="${thisJobId}Label" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="${thisJobId}Label">${jobInfo["employer"]} - ${jobInfo["title"]}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            ${jobInfo["description"]}
            </div>
        </div>
    </div>
</div>`
                ));
            }
            container.append(workExperienceContainer);

            // Add break
            container.append($('<div class="row"><div class="col-md-12"><hr></div></div>'));

            ///////////////////// Education //////////////////////////

            container.append('<div class="row group"><h2 class="text-capitalize text-muted">Education</h2></div>');
            let educationContainer = $('<div class="row group"></div>');

            for(let education of data["education"]){
                let thisEducation = $('<div class="job"></div>');
                let educationId = education["descriptor"].replace(/ /g,"").replace(/&/g, "");
                educationId = educationId.slice(0, 1).toLowerCase() + educationId.slice(1, educationId.length-1);
                thisEducation.append(`<a class="job-title" data-toggle="modal" data-target="#${educationId}">${education["institution"]} - ${education["descriptor"]}</a>`);
                thisEducation.append(`<div class="years-employed">${education["year"] ? education["year"] : "present"}</div>`);
                educationContainer.append(thisEducation);
                modals.append($(`
<div class="modal fade" id="${educationId}" tabindex="-1" role="dialog" aria-labelledby="${educationId}Label" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="${educationId}Label">${education["institution"]} - ${education["descriptor"]}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            ${education["description"]}
            </div>
        </div>
    </div>
</div>`
                ));
            }
            container.append(educationContainer);
            container.append(modals);

        }).done(function (data) {
            console.log("done");
        }).fail(function (data, status, error) {
            console.log("error", data, status, error);
        }).always(function (data) {
            console.log("complete")
        });
    });
});
