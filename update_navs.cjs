const fs = require('fs');
const pages = ['Home.jsx', 'AboutUs.jsx', 'SolarEnergy.jsx', 'Construction.jsx', 'Elevator.jsx', 'Projects.jsx', 'ProjectDetails.jsx'];
const navbarImport = "import Navbar from '../components/layout/Navbar';\n";

pages.forEach(page => {
    let content = fs.readFileSync('src/pages/' + page, 'utf-8');

    if (!content.includes('import Navbar')) {
        content = content.replace(/(import React.*?;\n)/, '$1' + navbarImport);
    }

    const navRegex = /<nav[\s\S]*?<\/nav>/;
    if (navRegex.test(content)) {
        content = content.replace(navRegex, '<Navbar />');
        fs.writeFileSync('src/pages/' + page, content, 'utf-8');
        console.log('Replaced nav in ' + page);
    }
});
