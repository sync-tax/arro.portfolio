<script setup>
import { onMounted, nextTick } from "vue";
import Prism from "prismjs";

import Collapsible from "../../components/Collapsibles.vue";
import Back from "../../components/ProjectBack.vue";
import Overview from "../../components/ProjectOverview.vue";

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<template>
  <div class="project">
    <Back />

    <section class="projectOverview">
      <Overview
        title="MIDI Boilerplate"
        text="I created a project starter boilerplate that I always use to kick off MIDI-driven live coding sessions in SonicPi."
      />

      <div class="mainProjectContent">
        <pre><code class="language-ruby">
"_- MIDI-JAM ~ [boilerplate] by TRIBΞHOLZ -_'
_-_-__--_-_--__-_--__-___--_-_--_--_-_-_-__-."
#---------------------------------------------------------
#PRESETS
use_bpm 146
use_debug false
use_real_time

#---------------------------------------------------------
#SAMPLES
#Define your samples inside the hash map
#Use by calling s[:sample_name]

s_path = "C:/YOUR/SAMPLE_DIR/PATH/"

s = {
  kick: "#{s_path}/kicks/kick.wav",
}

#---------------------------------------------------------
#METRONOME
#Use for syncing
#Allows changig sleep values without getting out of sync

live_loop :metro do
  sleep 1
end

#---------------------------------------------------------
#PATTERNS
#Define patterns by passing a string
#Each character represents one beat tick
#Hits whenever the current char equals "x"

define :pattern do |p|
  return p.ring.tick == "x"
end

p = ("xxx-xxx-")

#---------------------------------------------------------
#MIDI MIXER
#Define MIDI controls inside the Switch & map to desired range

#Allows for setting a specific range to MIDI-controls
define :scale_midi do |val, min, max|
  return min + (val.to_f / 127) * (max - min)
end

#Avoid "nil"-error by setting each MIDI-control value to 0.0 ONCE
$midi_values ||= Hash.new(0.0)

live_loop :midi_controls do
  key, value = sync "/midi:midi_mix_1:1/control_change" #Your MIDI Device
  
  case key
  when 19
    $midi_values[19] = scale_midi(value, 0, 1)
  when 23
    $midi_values[23] = scale_midi(value, 0, 0.4)
  end
end


#---------------------------------------------------------
#MIXER
#Use either as fallback or instead of the MIDI MIXER section

kick_amp = 0.0
snare_amp = 0.0


#---------------------------------------------------------
#LOOPS

live_loop :example_kick, sync: :metro do
  sample s[:kick],
    amp: $midi_values[19] != 0 ? $midi_values[19] : kick_amp
  sleep 1
end
</code></pre>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="Overview">
        <h4>About</h4>
        <p>
          While SonicPi enables scripting generative soundscapes, I personally
          prefer using the live loop feature. Controlling different parameters
          with a MIDI controller makes playing around even more fun.
        </p>
        <h4>Tech</h4>
        <p>
          - SonicPi <br />
          - Ruby
        </p>
      </Collapsible>

      <Collapsible title="Features">
        <h4>Metronome</h4>
        <p>
          Syncing to it enables playing around with sleep values without getting
          out of sync.
        </p>
        <h4>Pattern Function</h4>
        <p>
          Easily define rhythmic patterns of instruments with simple Strings.
        </p>
        <h4>MIDI Scale Function</h4>
        <p>Remap the default MIDI control range to your desired range.</p>
        <h4>MIDI Mapper</h4>
        <p>
          Place the controls you want to map within the Switch-Case and call
          scale_midi(val, min, max) on them.
        </p>
      </Collapsible>

      <Collapsible title="Resources">
        <p>
          <a
            target="_blank"
            href="https://github.com/sync-tax/sonicpi_livejam_boilerplate/blob/main/live_jam_boilerplate.rb"
            >→ GitHub - Code</a
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
