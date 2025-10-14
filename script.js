// codes
const theDisplayArea = document.querySelector('.form-box');

const stepContents = {
    stepOneContents: `
        <h1 class="form-box-header">Personal info</h1>
        <p class="form-box-info">Please provide your name, email address, and phone number.</p>

        <form class="form-to-fill">
            <label class="label">Name</label><br>
            <input type="text" placeholder="e.g. Stephen King" class="input" required><br><br><br>

            <label class="label">Email Address</label><br>
            <input type="email" placeholder="e.g. stephenking@lorem.com" class="input" required><br><br><br>

            <label class="label">Phone Number</label><br>
            <input type="number" placeholder="e.g. +1 234 567 890" class="input" required><br><br><br>

            <button type="submit" class="next-step step-one-next-step">Next Step</button>
        </form>
    `,
    stepTwoContents: `
        <h1 class="form-box-header">Select your plan</h1>
        <p class="form-box-info step-2-info">You have the option of monthly or yearly billing.</p>

        <div class= "step-two-monthly">
            <div class="plans">
                <div class="plans-option">
                    <img src="assets/images/icon-arcade.svg">
                    <h5 class="plan-name">Arcade</h5>
                    <p class="plan-price">$9/mo</p>
                </div>

                <div class="plans-option">
                    <img src="assets/images/icon-advanced.svg">
                    <h5 class="plan-name">Advanced</h5>
                    <p class="plan-price">$12/mo</p>
                </div>

                <div class="plans-option">
                    <img src="assets/images/icon-pro.svg">
                    <h5 class="plan-name">Pro</h5>
                    <p class="plan-price">$15/mo</p>
                </div>
            </div>
        </div>

        <div class= "step-two-yearly">
            <div class="plans">
                <div class="plans-option plans-option-yearly">
                    <img src="assets/images/icon-arcade.svg">
                    <h5 class="plan-name">Arcade</h5>
                    <p class="plan-price">$90/yr</p>
                    <p class="yearly-option-dropdown">2 months free</p>
                </div>

                <div class="plans-option plans-option-yearly">
                    <img src="assets/images/icon-advanced.svg">
                    <h5 class="plan-name">Advanced</h5>
                    <p class="plan-price">$120/yr</p>
                    <p class="yearly-option-dropdown">2 months free</p>
                </div>

                <div class="plans-option plans-option-yearly">
                    <img src="assets/images/icon-pro.svg">
                    <h5 class="plan-name">Pro</h5>
                    <p class="plan-price">$150/yr</p>
                    <p class="yearly-option-dropdown">2 months free</p>
                </div>
            </div>
        </div>

        <div class="plan-duration-container">
            <p class="monthly">Monthly</p>
            <label class="plan-duration-switch">
                <input type="checkbox" class="checkbox">
                <span class="slider"></span>
            </label>
            <p class="yearly">Yearly</p>
        </div>


        <div class="step-2-footer">
            <p class="go-back-btn">Go back</p>
            <button class="next-step">Next Step</button>
        </div>
    `,
    stepThreeContentsForMonthly: `
        <h1 class="form-box-header">Pick add-ons</h1>
        <p class="form-box-info step-2-info">Add-ons help enhance your gaming experience.</p>

        <div class="monthly-add-ons-options">
            <div class="add-ons-options">
                <input type="checkbox" class="add-ons-checkbox">
                <div>
                    <h5 class="add-ons-option-1-title">Online service</h5>
                    <p class="add-ons-option-1-info">Access to multiplayer games</p>
                </div>
                <div class="add-ons-option-1-price">+$1/mo</div>
            </div>

            <div class="add-ons-options">
                <input type="checkbox" class="add-ons-checkbox">
                <div>
                    <h5 class="add-ons-option-1-title">Larger Storage</h5>
                    <p class="add-ons-option-1-info">Extra 1TB of cloud save</p>
                </div>
                <div class="add-ons-option-1-price">+$2/mo</div>
            </div>

            <div class="add-ons-options">
                <input type="checkbox" class="add-ons-checkbox">
                <div>
                    <h5 class="add-ons-option-1-title">Customizable profile</h5>
                    <p class="add-ons-option-1-info">Custom theme on your profile</p>
                </div>
                <div class="add-ons-option-1-price">+$2/mo</div>
            </div>
        </div>

        <div class="step-2-footer">
            <p class="go-back-btn">Go back</p>
            <button class="next-step">Next Step</button>
        </div>
    `,
    stepThreeContentsForYearly: `
        <h1 class="form-box-header">Pick add-ons</h1>
        <p class="form-box-info step-2-info">Add-ons help enhance your gaming experience.</p>

        <div class="monthly-add-ons-options">
            <div class="add-ons-options">
                <input type="checkbox" class="add-ons-checkbox">
                <div>
                    <h5 class="add-ons-option-1-title">Online service</h5>
                    <p class="add-ons-option-1-info">Access to multiplayer games</p>
                </div>
                <div class="add-ons-option-1-price">+$1/yr</div>
            </div>

            <div class="add-ons-options">
                <input type="checkbox" class="add-ons-checkbox">
                <div>
                    <h5 class="add-ons-option-1-title">Larger Storage</h5>
                    <p class="add-ons-option-1-info">Extra 1TB of cloud save</p>
                </div>
                <div class="add-ons-option-1-price">+$2/yr</div>
            </div>

            <div class="add-ons-options">
                <input type="checkbox" class="add-ons-checkbox">
                <div>
                    <h5 class="add-ons-option-1-title">Customizable profile</h5>
                    <p class="add-ons-option-1-info">Custom theme on your profile</p>
                </div>
                <div class="add-ons-option-1-price">+$2/yr</div>
            </div>
        </div>

        <div class="step-2-footer">
            <p class="go-back-btn">Go back</p>
            <button class="next-step">Next Step</button>
        </div>
    `,
    stepFourContentsForMonthly: `
    <h1 class="form-box-header">Finishing up</h1>
    <p class="form-box-info step-2-info">Double-check everything looks OK before confirming.</p>

    <div class="finishing-up-table">
        <div class="plan-table">
            <div>
                <h4 class="plan-monthly-plan-name plan-name-js">Arcade (Monthly)</h4>
                <a href="#" class="plan-monthly-plan-change">Change</a>
            </div>
            <p class="plan-monthly-plan-price">$9/mo</p>
        </div>
        <br>
        <hr>

        <div class="plan-table">
            <div>
                <h4 class="plan-monthly-plan-name total-plan-amount">Online service</h4>
            </div>
            <p class="plan-monthly-plan-price total-plan-amount">+$1/mo</p>
        </div>

        <div class="plan-table">
            <div>
                <h4 class="plan-monthly-plan-name total-plan-amount">Larger storage</h4>
            </div>
            <p class="plan-monthly-plan-price total-plan-amount">+$2/mo</p>
        </div>
    </div>

    <div class="plan-table total-plan-table">
        <div>
            <h4 class="plan-monthly-plan-name total-plan-amount plan-total-amt">Total (per month)</h4>
        </div>
        <p class="plan-monthly-plan-price total-plan-amount plan-total-amt">+$12/mo</p>
    </div>
            
    <div class="step-2-footer">
        <p class="go-back-btn">Go back</p>
        <button class="next-step">Confirm</button>
    </div>
    `,
    stepFourContentsForYearly: `
        <h1 class="form-box-header">Finishing up</h1>
        <p class="form-box-info step-2-info">Double-check everything looks OK before confirming.</p>
        
        <div class="finishing-up-table">
            <div class="plan-table">
                <div>
                    <h4 class="plan-monthly-plan-name plan-name-js">Arcade (Yearly)</h4>
                    <a href="#" class="plan-monthly-plan-change">Change</a>
                </div>
                <p class="plan-monthly-plan-price">$90/yr</p>
            </div>
            <br>
            <hr>

            <div class="plan-table">
                <div>
                    <h4 class="plan-monthly-plan-name total-plan-amount">Online service</h4>
                </div>
                <p class="plan-monthly-plan-price total-plan-amount">+$10/yr</p>
            </div>

            <div class="plan-table">
                <div>
                    <h4 class="plan-monthly-plan-name total-plan-amount">Larger storage</h4>
                </div>
                <p class="plan-monthly-plan-price total-plan-amount">+$20/yr</p>
            </div>
        </div>

            <div class="plan-table total-plan-table">
                <div>
                    <h4 class="plan-monthly-plan-name total-plan-amount plan-total-amt">Total (per year)</h4>
                </div>
                <p class="plan-monthly-plan-price total-plan-amount plan-total-amt">+$120/yr</p>
            </div>

        <div class="step-2-footer">
            <p class="go-back-btn">Go back</p>
            <button class="next-step">Confirm</button>
        </div>
    `,
    stepContentOfConfirmation: `
    <div class="thank-you-box">
        <img src="assets/images/icon-thank-you.svg" class="thank-you-img">
        <h1 class="thank-you">Thank You!</h1>
        <p class="thank-you-message">Thanks for confirming your subscription! We hope you have fun 
        using our platform. If you ever need support, please feel free 
        to email us at <a href="#">support@loremgaming.com</a> .</p>
    </div>
    `
};

let currentStep = 1;
let billingType = 'monthly'; // track whether user selected monthly or yearly
let selectedPlan = localStorage.getItem('selectedPlan');

function loadPage(stepNumber) {

    document.querySelectorAll('.step-number').forEach((step, index) => {
        if (index + 1 === stepNumber) {
            step.classList.add('active-step');
        } else {
            step.classList.remove('active-step')
        }
    });

    if (stepNumber === 1) {
        theDisplayArea.innerHTML = stepContents.stepOneContents;


        const form = theDisplayArea.querySelector('.form-to-fill');
        const inputs = form.querySelectorAll('.input');
        const nextBtn = form.querySelector('.next-step');

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();

            let allFilled = true;
            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    allFilled = false;
                    input.style.border = '2px solid red';
                } else {
                    input.style.border = '1px solid gray';
                }
            });

            if (!allFilled) {
                alert('Please fill in all the fields');
                return;
            }

            currentStep = 2;
            loadPage(currentStep);
        });
    }

    if (stepNumber === 2) {
        theDisplayArea.innerHTML = stepContents.stepTwoContents;

        const nextBtn = theDisplayArea.querySelector('.next-step');
        const backBtn = theDisplayArea.querySelector('.go-back-btn');
        const checkbox = theDisplayArea.querySelector('.checkbox');

        // === PLAN SELECTION HANDLING (Step 2) ===
        const planBoxes = theDisplayArea.querySelectorAll('.plans-option');

        planBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // remove active class from all boxes
            planBoxes.forEach(p => p.classList.remove('active-plan'));

            // add active style to the clicked one
            box.classList.add('active-plan');

            // read the plan name from the plan-name element inside the clicked box
            const nameEl = box.querySelector('.plan-name');
            selectedPlan = nameEl ? nameEl.textContent.trim() : '';

            // save choice so it remains after refresh or when navigating between steps
            localStorage.setItem('selectedPlan', selectedPlan);
        });
        });

        // If we had a saved selection earlier, mark it visually
        if (selectedPlan) {
        planBoxes.forEach(box => {
            const nameEl = box.querySelector('.plan-name');
            if (nameEl && nameEl.textContent.trim() === selectedPlan) {
            box.classList.add('active-plan');
            } else {
            box.classList.remove('active-plan');
            }
        });
        }
        // === PLAN SELECTION HANDLING (Step 2) ===


        checkbox.addEventListener('change', () => {

            const monthlyContent = document.querySelectorAll('.step-two-monthly');
            const yearlyContent = document.querySelectorAll('.step-two-yearly');

            if (checkbox.checked) {
                billingType = 'yearly';
                monthlyContent.forEach(p => {
                    p.style.display = 'none';
                });
                yearlyContent.forEach(p => {
                    p.style.display = 'block';
                })
            } else {
                billingType = 'monthly';
                monthlyContent.forEach(p => {
                    p.style.display = 'block';
                });
                yearlyContent.forEach(p => {
                    p.style.display = 'none';
                })
            }

        });

        nextBtn.addEventListener('click', () => {
            billingType = checkbox.checked ? 'yearly' : 'monthly'; // this is a ternary operator, a short way of writing an if-else statment.
            // if the checkbox is checked= billingType = yearly, if not, monthly
            currentStep = 3;
            loadPage(currentStep);
        });

        backBtn.addEventListener('click', () => {
            currentStep = 1;
            loadPage(currentStep);
        });
    }

    if (stepNumber === 3) {
        const content =
            billingType === 'yearly'
                ? stepContents.stepThreeContentsForYearly
                : stepContents.stepThreeContentsForMonthly;

        theDisplayArea.innerHTML = content;

        const nextBtn = theDisplayArea.querySelector('.next-step');
        const backBtn = theDisplayArea.querySelector('.go-back-btn');

        nextBtn.addEventListener('click', () => {
            currentStep = 4;
            loadPage(currentStep);
        });

        backBtn.addEventListener('click', () => {
            currentStep = 2;
            loadPage(currentStep);
        });
    }

    if (stepNumber === 4) {
        const content =
        billingType === 'yearly'
            ? stepContents.stepFourContentsForYearly
            : stepContents.stepFourContentsForMonthly;

        theDisplayArea.innerHTML = content;

        // === INSERT SELECTED PLAN INTO STEP 4 SUMMARY ===
        const planNameDisplay = theDisplayArea.querySelector('.plan-monthly-plan-name')
        || theDisplayArea.querySelector('.plan-monthly h4')
        || theDisplayArea.querySelector('.plan-monthly-plan-name');

        if (selectedPlan && planNameDisplay) {
        // If the template already contains extra text (e.g. "Arcade (Monthly)") you can replace only the plan name portion.
        // For simplicity, set the whole text to selectedPlan + billingType label:
        const periodLabel = billingType === 'yearly' ? ' (Yearly)' : ' (Monthly)';
        planNameDisplay.textContent = `${selectedPlan}${periodLabel}`;
        }

        // Also in case you used a different element for plan + change link,
        // look for a plain text node/element and update accordingly:
        const planPriceEl = theDisplayArea.querySelector('.plan-monthly-plan-price');
        if (!selectedPlan && planPriceEl) {
        // if nothing selected, you can set a default or hide the price
        planPriceEl.textContent = '';
        }

        const nextBtn = theDisplayArea.querySelector('.next-step');
        const backBtn = theDisplayArea.querySelector('.go-back-btn');

        nextBtn.addEventListener('click', () => {
            currentStep = 5;
            loadPage(currentStep);
        });

        backBtn.addEventListener('click', () => {
            currentStep = 3;
            loadPage(currentStep);
        });
    }

    if (stepNumber === 5) {
        theDisplayArea.innerHTML = stepContents.stepContentOfConfirmation;
    }
}

loadPage(currentStep);


const body = document.body;
const themeToggle = document.querySelector('.theme-switcher');

const themes = ['light-mode', 'dark-mode', 'red-mode'];
let currentThemeIndex = 0;

// Load saved theme (if any)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  currentThemeIndex = themes.indexOf(savedTheme);
}

// Update theme
function setTheme(index) {
  body.classList.remove(...themes);
  const newTheme = themes[index];
  body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
}

// When toggle is clicked
themeToggle.addEventListener('click', () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  setTheme(currentThemeIndex);
});
console.log(themeToggle);