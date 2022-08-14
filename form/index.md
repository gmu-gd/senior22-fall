---
layout: interior
title: Questionnaire
---

<form id="sp-form" action="https://getform.io/f/5b6a3696-e405-43ee-a72e-e391bd0f83a1" method="POST">
  <p>Welcome to Senior Design Project! I’m glad you could join us. Please take some time to answer the following questions as honestly as possible.</p>
  <p>This questionnaire will NOT be graded. Its intent is to let us get to know you better as a student (and human being), as well as to give us a clearer sense of your expectations for this course.</p>
  <ol>

      <li>
        <label for="teacher">Who is your Senior Project teacher?</label>
        <input type="text" name="teacher" required>
      </li>


      <li>
        <label for="full-name">Your Full Name</label>
        <input type="text" name="full-name" required>
      </li>


      <li>
        <label for="preferred-name">Your Preferred Name</label>
        <input type="text" name="preferred-name" required>
      </li>


      <li>
        <label for="pronuciation">Phonetic Pronunciation of Your Name</label>
        <input type="text" name="pronunciation" required>
      </li>


      <li>
        <label for="pronouns">Your Pronouns</label>
        <input type="text" name="pronouns" required>
      </li>


      <li>
        <label for="define">How do you define graphic design?</label>
        <textarea type="textarea" name="define" required></textarea>
      </li>

    <p>For the following three questions: please move the slider closest to the statement that best describes your abilities within the sliding scale.</p>
    <li>
      <div class="slidecontainer">
        <label for="gd-skills">How confident do you feel about your skills in graphic design?</label>
        <input type="range" min="1" max="100" value="50" class="slider" id="gd-skills" name="gd-skills" required>
        <ul class="range-labels">
          <li class="label-left">not confident</li>
          <li class="label-center">somewhat confident</li>
          <li class="label-right">extremely confident</li>
        </ul>
      </div>
    </li>
      <li>
      <div class="slidecontainer">
        <label for="gd-understanding">How confident do you feel about your understanding of graphic design?</label>
        <input type="range" min="1" max="100" value="50" class="slider" id="gd-understanding" name="gd-understanding" required>
        <ul class="range-labels">
          <li class="label-left">not confident</li>
          <li class="label-center">somewhat confident</li>
          <li class="label-right">extremely confident</li>
        </ul>
      </div>
    </li>
    <li>
      <div class="slidecontainer">
        <label for="public-speaking">How confident do you feel about your public speaking skills?</label>
        <input type="range" min="1" max="100" value="50" class="slider" id="public-speaking" name="public-speaking" required>
        <ul class="range-labels">
          <li class="label-left">not confident</li>
          <li class="label-center">somewhat confident</li>
          <li class="label-right">extremely confident</li>
        </ul>
      </div>
    </li>

      <li>
        <label for="strengths">What are some of your biggest strengths as a designer?</label>
        <textarea type="textarea" name="strengths" required></textarea>
      </li>


      <li>
        <label for="weaknesses">What are some of your biggest weaknesses as a designer?</label>
        <textarea type="textarea" name="weaknesses" required></textarea>
      </li>


      <li>
        <label for="failure">List a failure that has taught you something unexpected.</label>
        <textarea type="textarea" name="failure" required></textarea>
      </li>


      <li>
        <label for="social-issue">Name a social issue you feel passionate about. If there’s more than one, feel free to share.</label>
        <textarea type="textarea" name="social-issue" required></textarea>
      </li>


      <li>
        <label for="book">Name a book you love (feel free to share more than one).</label>
        <textarea type="textarea" name="book" required></textarea>
      </li>


      <li>
        <label for="accomplish">What would you like to accomplish during this course?</label>
        <textarea type="textarea" name="accomplish" required></textarea>
      </li>


      <li>
        <label for="describe">Use five adjectives to describe yourself.</label>
        <textarea type="textarea" name="describe" required></textarea>
      </li>


      <li>
        <label for="two-years">What would you like to accomplish 2 years from now?</label>
        <textarea type="textarea" name="two-years" required></textarea>
      </li>


      <li>
        <label for="five-years">What would you like to accomplish 5 years from now?</label>
        <textarea type="textarea" name="five-years" required></textarea>
      </li>


      <li>
        <label for="live">Where would you like to live (city/village/town/country) after graduation?</label>
        <textarea type="textarea" name="live" required></textarea>
      </li>


      <li>
        <label for="dream-job">What would be your dream job? Be as specific as you want.</label>
        <textarea type="textarea" name="dream-job" required></textarea>
      </li>


      <li class="special">
        <label for="portrait">Take 10 minutes to draw a self-portrait of you in ten years and upload the file here. Be as specific as you want: what are you doing? what are you wearing? where are you? is someone with you? REMINDER: your skills will NOT be graded, your participation IS being graded.</label>
        <input type="file" name="portrait" id="portrait-but" required>
      </li>

  </ol>
  <button id="sub-but" type="submit">Send</button>
</form>
