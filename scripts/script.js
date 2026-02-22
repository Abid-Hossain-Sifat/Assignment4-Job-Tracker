let interviewList = [];
let rejectList = [];
let currentStatus = 'all-btn';

const totalCount = document.getElementById('total');
const interviewCount = document.getElementById('interview');
const rejectCount = document.getElementById('rejected');
const jobAvailable = document.getElementById('job-available');

const allCardSection = document.getElementById('all-cards');
const filterSection = document.getElementById('filtered-card');
const noJobsSection = document.getElementById('no-jobs');

function calculateCount() {
    totalCount.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;
}
calculateCount();