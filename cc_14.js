// Task 2 - Support Tickets Dynamic Addition
// Function to add a new support ticket
function addSupportTicket(name, issue, priority) {
    const ticketContainer = document.getElementById("ticketContainer");

    // Create ticket div
    const ticket = document.createElement("div");
    ticket.classList.add("support-ticket");

    // Customer name heading
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;

    // Issue description paragraph
    const issuePara = document.createElement("p");
    issuePara.textContent = issue;

    // Priority label
    const priorityLabel = document.createElement("span");
    priorityLabel.textContent = `Priority: ${priority}`;
    priorityLabel.classList.add(priority.toLowerCase()); // Apply class based on priority

    // Resolve button
    const resolveBtn = document.createElement("button");
    resolveBtn.textContent = "Resolve";
    resolveBtn.classList.add("resolve-btn");

    // Append elements to the ticket
    ticket.appendChild(nameHeading);
    ticket.appendChild(issuePara);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveBtn);

    // Append ticket to the container
    ticketContainer.appendChild(ticket);
}

// Example usage (you can call this function dynamically later)
addSupportTicket("John Doe", "Cannot access account", "High");
addSupportTicket("Jane Smith", "Billing issue", "Medium");
addSupportTicket("Mike Johnson", "Bug in mobile app", "Low");

// Task 3 - Highlighting High Priorioty Tickets
// Function to highlight high-priority tickets
function highlightHighPriorityTickets() {
    // Select all tickets with "High" priority
    const highPriorityTickets = document.querySelectorAll(".high");

    // Convert NodeList to array and update styles
    Array.from(highPriorityTickets).forEach(ticket => {
        ticket.style.backgroundColor = "#ffcccc"; // Light red background
        ticket.style.border = "2px solid red"; // Red border
        ticket.style.fontWeight = "bold"; // Make text bold
    });
}

// Call function to highlight high-priority tickets
highlightHighPriorityTickets();

// Task 4 - Support Ticket Resolution with Event Bubbling
// Function to add a new support ticket with event handling
function addSupportTicket(name, issue, priority) {
    const ticketContainer = document.getElementById("ticketContainer");

    // Create ticket div
    const ticket = document.createElement("div");
    ticket.classList.add("support-ticket", priority.toLowerCase()); // Add priority class

    // Customer name heading
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;

    // Issue description paragraph
    const issuePara = document.createElement("p");
    issuePara.textContent = issue;

    // Priority label
    const priorityLabel = document.createElement("span");
    priorityLabel.textContent = `Priority: ${priority}`;
    priorityLabel.classList.add("priority");

    // Resolve button
    const resolveBtn = document.createElement("button");
    resolveBtn.textContent = "Resolve";
    resolveBtn.classList.add("resolve-btn");

    // Event listener to remove ticket when resolve button is clicked
    resolveBtn.addEventListener("click", function (event) {
        ticketContainer.removeChild(ticket); // Remove ticket from container
        event.stopPropagation(); // Prevent event bubbling
    });

    // Append elements to the ticket
    ticket.appendChild(nameHeading);
    ticket.appendChild(issuePara);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveBtn);

    // Append ticket to the container
    ticketContainer.appendChild(ticket);
}

// Event listener on ticket container to log messages when tickets are clicked
document.getElementById("ticketContainer").addEventListener("click", function (event) {
    if (event.target.classList.contains("support-ticket")) {
        console.log("Ticket clicked!");
    }
});

// Example support tickets
addSupportTicket("John Doe", "Cannot access account", "High");
addSupportTicket("Jane Smith", "Billing issue", "Medium");
addSupportTicket("Mike Johnson", "Bug in mobile app", "Low");

// Task 5 - Inline Editing for Support Tickets
// Function to add a new support ticket with inline editing
function addSupportTicket(name, issue, priority) {
    const ticketContainer = document.getElementById("ticketContainer");

    // Create ticket div
    const ticket = document.createElement("div");
    ticket.classList.add("support-ticket", priority.toLowerCase()); // Add priority class

    // Customer name heading
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;

    // Issue description paragraph
    const issuePara = document.createElement("p");
    issuePara.textContent = issue;

    // Priority label
    const priorityLabel = document.createElement("span");
    priorityLabel.textContent = `Priority: ${priority}`;
    priorityLabel.classList.add("priority");

    // Resolve button
    const resolveBtn = document.createElement("button");
    resolveBtn.textContent = "Resolve";
    resolveBtn.classList.add("resolve-btn");

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    // Event listener to remove ticket when resolve button is clicked
    resolveBtn.addEventListener("click", function (event) {
        ticketContainer.removeChild(ticket);
        event.stopPropagation(); // Prevent event bubbling
    });

    // Event listener for inline editing
    editBtn.addEventListener("click", function () {
        // Create input fields
        const nameInput = document.createElement("input");
        nameInput.value = nameHeading.textContent;

        const issueInput = document.createElement("input");
        issueInput.value = issuePara.textContent;

        const prioritySelect = document.createElement("select");
        ["High", "Medium", "Low"].forEach(level => {
            const option = document.createElement("option");
            option.value = level;
            option.textContent = level;
            if (level === priority) option.selected = true;
            prioritySelect.appendChild(option);
        });

        // Save button
        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList.add("save-btn");

        // Replace static content with input fields
        ticket.replaceChild(nameInput, nameHeading);
        ticket.replaceChild(issueInput, issuePara);
        ticket.replaceChild(prioritySelect, priorityLabel);
        ticket.replaceChild(saveBtn, editBtn);

        // Event listener to save updated data
        saveBtn.addEventListener("click", function () {
            // Update values
            nameHeading.textContent = nameInput.value;
            issuePara.textContent = issueInput.value;
            priorityLabel.textContent = `Priority: ${prioritySelect.value}`;

            // Revert back to static elements
            ticket.replaceChild(nameHeading, nameInput);
            ticket.replaceChild(issuePara, issueInput);
            ticket.replaceChild(priorityLabel, prioritySelect);
            ticket.replaceChild(editBtn, saveBtn);
        });
    });

    // Append elements to the ticket
    ticket.appendChild(nameHeading);
    ticket.appendChild(issuePara);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveBtn);
    ticket.appendChild(editBtn);

    // Append ticket to the container
    ticketContainer.appendChild(ticket);
}

// Example support tickets
addSupportTicket("John Doe", "Cannot access account", "High");
addSupportTicket("Jane Smith", "Billing issue", "Medium");
addSupportTicket("Mike Johnson", "Bug in mobile app", "Low");