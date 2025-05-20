const fs = require("fs");
const path = require("path");

// Function to read markdown content from a file
function readMarkdownFile(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return "";
  }
}

// Function to get all chapter directories
function getChapterDirectories() {
  const baseDir = path.join(__dirname, "javascript-fundamentals");
  return fs
    .readdirSync(baseDir)
    .filter((dir) => fs.statSync(path.join(baseDir, dir)).isDirectory())
    .sort(); // Sort to maintain order
}

// Function to find the markdown guide in a chapter directory
function findChapterGuide(chapterDir) {
  const files = fs.readdirSync(chapterDir);
  return files.find((file) => file.endsWith("-guide.md"));
}

// Function to transform headings in content
function transformHeadings(content) {
  // First, find the main heading and transform it
  const mainHeadingMatch = content.match(/^# (.+)$/m);
  if (!mainHeadingMatch) return content;

  // Remove the main heading as it will be replaced
  let transformedContent = content.replace(/^# .+$/m, "");

  // Simply add one level to each heading
  transformedContent = transformedContent.replace(
    /^(#{1,6}) /gm,
    (match, hashes) => hashes + "# "
  );

  return transformedContent;
}

// Function to transform the headline
function transformHeadline(content, chapterNumber) {
  // Find the first headline in the content
  const headlineMatch = content.match(/^# (.+)$/m);
  if (!headlineMatch) return content;

  const originalHeadline = headlineMatch[1];
  // Extract the title part after the number (e.g., "Variables — JavaScript Fundamentals")
  const titlePart = originalHeadline.replace(/^\d+\.\d+\s+/, "");

  // Remove leading zero from chapter number if it exists
  const cleanChapterNumber = chapterNumber.replace(/^0+/, "");

  // Create new headline with format "## 5.X Title"
  const newHeadline = `## 5.${cleanChapterNumber} ${titlePart}`;

  // Transform all headings in the content
  const transformedContent = transformHeadings(content);

  // Combine the new headline with the transformed content
  return newHeadline + "\n\n" + transformedContent;
}

// Main function to update README.md
function updateReadme() {
  const baseDir = path.join(__dirname, "javascript-fundamentals");
  const readmePath = path.join(__dirname, "README.md");

  // Read the existing README content
  let readmeContent = fs.readFileSync(readmePath, "utf8");

  // Find the position to insert the JavaScript fundamentals content
  const insertPosition = readmeContent.indexOf("# 5. JavaScript Fundamentals");

  if (insertPosition === -1) {
    console.error("Could not find '# 5. JavaScript Fundamentals' in README.md");
    return;
  }

  // Generate the JavaScript fundamentals content
  let jsContent = "";

  getChapterDirectories().forEach((chapterDir) => {
    const fullPath = path.join(baseDir, chapterDir);
    const guideFile = findChapterGuide(fullPath);

    if (guideFile) {
      const chapterNumber = chapterDir.split("-")[0];
      const guideContent = readMarkdownFile(path.join(fullPath, guideFile));

      // Transform the headline and add the content
      const transformedContent = transformHeadline(guideContent, chapterNumber);
      jsContent += transformedContent + "\n\n";
    }
  });

  // Find the next section to know where to stop
  const nextSectionMatch = readmeContent
    .slice(insertPosition)
    .match(/^# \d+\./m);
  const nextSectionPosition = nextSectionMatch
    ? insertPosition + nextSectionMatch.index
    : readmeContent.length;

  // Insert the new content
  const newReadmeContent =
    readmeContent.slice(
      0,
      insertPosition + "# 5. JavaScript Fundamentals".length
    ) +
    "\n\n" + // Add some spacing after the main heading
    jsContent +
    readmeContent.slice(nextSectionPosition);

  // Write the updated content back to README.md
  fs.writeFileSync(readmePath, newReadmeContent);
  console.log("README.md has been updated successfully!");
}

// Run the update
updateReadme();
