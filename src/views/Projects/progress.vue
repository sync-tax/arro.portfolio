<script setup>
import Collapsible from "../../components/Collapsibles.vue";
import Back from "../../components/ProjectBack.vue";
import Overview from "../../components/ProjectOverview.vue";
import Image from "../../components/Image.vue";
</script>

<template>
  <div class="project">
    <Back />

    <section class="projectOverview">
      <Overview
        title="Progress v0.1"
        text="Yet another productivity app — but unlike the usual to-do list, it’s a gamified system with quests, habit tracking, tags, leveling, and more. Currently only for my personal use tho."
      />

      <div class="mainProjectContent">
        <Image src="/project_images/d_progress_img2.jpg" alt="Progress App" />
        <p class="contentNote">Make your own questlines, put in the sessions, and level up!</p>
        <Image src="/project_images/d_progress_img1.jpg" alt="Progress App" />
        <p class="contentNote">You improve in what you measure. Track your skills and bring them to level 60.</p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="Overview">
        <h4>About</h4>
        <p>
            I loved using Habitica but wanted fewer distractions and a stronger focus on habit stacking, splitting projects in quests, and seeing my skills level up. Seeing progress hit <span style="color: #A335EE;">epic</span> or <span style="color: #FF8000;">legendary</span> really keeps me motivated!
        </p>

        <h4>Tech</h4>
        <p>
          - HTML / SCSS / JS / TS / Vue.js <br />
          - Electron <br />
          - LowDB <br />
          - Vite
        </p>
      </Collapsible>
      <Collapsible title="Features">
  <h4>Timer</h4>
  <p>
    Flexible project timer (1-120 min) with manual time adjustments and Pomodoro-style workflow. Adding time manually also works.
  </p>
  <h4>Quests</h4>
  <p>
    Organize projects into questlines with sub-quests with their own tag and tasks. Each quest has its own rewards based on time spent.
  </p>
  <h4>Ideas</h4>
  <p>
    Backlog to store ideas. Convert ideas into quests when ready to tackle them.
  </p>
  <h4>Habit Stacks</h4>
  <p>
    Stack and track habits with streak-based progression and EXP rewards.
  </p>
  <h4>Tags</h4>
  <p>
    Represent skills or passions. Level them up based on focus time and habit completions.
  </p>
  <h4>Rewards</h4>
  <p>
    Define your own rewards and purchase them with earned crystals (repeatable or one-time).
  </p>
  <h4>Progression System</h4>
  <p>
    Level up tags, habits, and projects with rank progression from Common to Legendary (level cap 60). There is also a global user level progression.
  </p>
  <h4>Future Updates</h4>
  <p>
    - Achievements system <br />
    - Settings (themes, import/export DB) <br />
    - More advanced statistics <br />
    - Reworked & more intuitive UI <br />
    - UI animations & sound effects <br />
    - Architecture cleanup & DB logic improvements <br />
    - Reduced file complexity <br />
  </p>

  <p style="color: #f01e2c;">Testing Phase: Bug-Logs on GitHub.</p>
</Collapsible>
      <Collapsible title="Resources">
        <p>
          <a
            target="_blank"
            href="https://github.com/sync-tax/progress_app"
            >→ Codebase on GitHub</a
          >
        </p>
      </Collapsible>
    </section>
  </div>
</template>

<style scoped>
.ease-in-enter-active,
.ease-in-leave-active {
  transition: opacity 0.2s ease-in;
  overflow: hidden;
}

.ease-in-enter-from,
.ease-in-leave-to {
  opacity: 0;
  max-height: fit-content;
}
</style>
