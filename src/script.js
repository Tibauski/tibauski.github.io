
// function onC1() {
//     var x = document.getElementById("myDIV");
//     x.style.display = "none";
// }
// function offC1() {
//     var x = document.getElementById("myDIV");
//     x.style.display = "block";
// }

// (function () {
//   var root = this;
//   var previousUnderscore = root._;
//   var breaker = {};
//   var ArrayProto = Array.prototype,
//       ObjProto = Object.prototype,
//       FuncProto = Function.prototype;
  
//   var nativeForEach = ArrayProto.forEach;
  
//   var _ = function (obj) {
//     if (obj instanceof _) return obj;
//     if (!(this instanceof _)) return new _(obj);
//     this._wrapped = obj
//   };
//   root._ = _;
  
  
//   var each = _.each = _.forEach = function (obj, iterator, context) {
    
//     if (nativeForEach && obj.forEach === nativeForEach) obj.forEach(iterator, context);
//     else if (obj.length === +obj.length)
//       for (var i = 0, l = obj.length; i < l; i++) {
//         if (iterator.call(context, obj[i], i, obj) === breaker) return
//           } else
//             for (var key in obj)
//               if (_.has(obj, key))
//                 if (iterator.call(context, obj[key], key, obj) === breaker) return
//                   };
// }).call();


// PianoKeyboard = function (audioContext, noteOnCallback, noteSlideCallback, noteOffCallback) {
//   _this = this;
//   this.audioContext = audioContext || new webkitAudioContext;
//   this.noteOnCallback = noteOnCallback;
//   this.noteSlideCallback = noteSlideCallback;
//   this.noteOffCallback = noteOffCallback;
//   this.audioReady = false;
  
  
//   var oscOctave = document.querySelector("#osc-octave");
//   this.octave = parseInt(oscOctave.value);
//   this.octaveOffset = 0;
  
  
  
  
//   this.heldNote = "";
//   this.keyElements = document.querySelectorAll("#piano-keys .key");
//   _.each(this.keyElements, function (keyElement) {
//     keyElement.onmousedown = function (event) {
//       event.preventDefault();
//       _this.noteOn(event.target.dataset["note"] +
//                    (_this.octave ), event.target)
//     };
//     keyElement.onmouseup = function (event) {
//       event.preventDefault();
//       _this.noteOff()
//     };
//     keyElement.onmousemove = function (event) {
//       event.preventDefault();
//       if (_this.heldNote != "") {
//         var element = document.elementFromPoint(event.x, event.y);
//         if (element.dataset["note"]) {
//           var note = element.dataset["note"] + _this.octave;
//           if (note != _this.heldNote) _this.noteOn(note, element)
//             } else _this.noteOff()
//               }
//     };
//     keyElement.ontouchstart = function (event) {
//       event.preventDefault();
//       if (!this.audioReady) {
//         this.audioReady = true;
//         var osc =
//             audioContext.createOscillator();
//         osc.connect(_this.audioContext.destination);
//         osc.noteOn(0);
//         osc.disconnect(0)
//       }
//       _this.noteOn(event.target.dataset["note"] + _this.octave, event.target)
//     };
//     keyElement.ontouchmove = function (event) {
//       event.preventDefault();
//       var element = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
//       if (element.dataset["note"]) {
//         var note = element.dataset["note"] + _this.octave;
//         if (note != _this.heldNote) _this.noteOn(note, element)
//           } else _this.noteOff()
//             };
//     keyElement.ontouchend =
//       function (event) {
//       event.preventDefault();
//       if (event.touches.length == 1) _this.noteOff()
//         }
//   })
// };
// PianoKeyboard.prototype.noteOn = function (note, element) {
//   if (this.heldNote != "") this.noteSlideCallback(note);
//   else this.noteOnCallback(note); if (this.heldKeyElement) this.heldKeyElement.classList.remove("held");
//   this.heldNote = note;
//   this.heldKeyElement = element;
//   this.heldKeyElement.classList.add("held")
// };
// PianoKeyboard.prototype.noteOff = function (note) {
//   this.noteOffCallback();
//   this.heldNote = "";
//   this.heldKeyElement.classList.remove("held")
// };
// window.onload = function () {
//   document.querySelector(".touch-move-scroll-blocker").addEventListener("touchmove", function (event) {
//     event.preventDefault()
//   }, false);
//   var audioContext = new webkitAudioContext;
//   audioContext.sampleRate = 44100;
//   var synth = new Synthesizer(audioContext);
//   var oscShapeSlider = document.querySelector("#osc-shape");
//   synth.oscillator.type = parseInt(oscShapeSlider.value);
//   oscShapeSlider.onchange = function (event) {
//     synth.oscillator.type = parseInt(event.target.value)
//   };
//   var lpfCutoffSlider = document.querySelector("#lpf-freq");
//   synth.setFilterFrequency(lpfCutoffSlider.value);
//   lpfCutoffSlider.onchange = function (event) {
//     synth.setFilterFrequency(event.target.value)
//   };
//   var lpfResonanceSlider = document.querySelector("#lpf-res");
//   synth.setFilterResonance(lpfResonanceSlider.value);
//   lpfResonanceSlider.onchange = function (event) {
//     synth.setFilterResonance(event.target.value)
//   };
//   var attackSlider = document.querySelector("#env-attack");
//   synth.envelope[0] = attackSlider.value;
//   attackSlider.onchange = function (event) {
//     synth.envelope[0] = event.target.value
//   };
//   var decaySlider = document.querySelector("#env-decay");
//   synth.envelope[1] = decaySlider.value;
//   decaySlider.onchange = function (event) {
//     synth.envelope[1] = event.target.value
//   };
//   var sustainSlider = document.querySelector("#env-sustain");
//   synth.envelope[2] = sustainSlider.value;
//   sustainSlider.onchange = function (event) {
//     synth.envelope[2] = event.target.value
//   };
//   var releaseSlider = document.querySelector("#env-release");
//   synth.envelope[3] = releaseSlider.value;
//   releaseSlider.onchange = function (event) {
//     synth.envelope[3] = event.target.value
//   };
  
  
  
//   var oscOctave = document.querySelector("#osc-octave");
//   this.octave = parseInt(oscOctave.value);
  
//   oscOctave.onchange = function (event) {
//     _this.octave = parseInt(event.target.value)
//   };
  
  
  
//   var noteOnCallback = function (note) {
//     synth.noteOn(note)
//   };
//   var noteSlideCallback = function (note) {
//     synth.noteSlide(note)
//   };
//   var noteOffCallback = function () {
//     synth.noteOff()
//   };
//   var keyboard = new PianoKeyboard(audioContext, noteOnCallback, noteSlideCallback, noteOffCallback)
//   };


// Synthesizer = function (audioContext){
  
//   this.audioContext = audioContext || new webkitAudioContext();
  
//   this.notes = {'C0':16.35 , 'C#0':17.32 , 'Db0':17.32 , 'D0':18.35 , 'D#0':19.45 , 'Eb0':19.45 , 'E0':20.60 , 'F0':21.83 , 'F#0':23.12 , 'Gb0':23.12 , 'G0':24.50 , 'G#0':25.96 , 'Ab0':25.96 , 'A0':27.50 , 'A#0':29.14 , 'Bb0':29.14 , 'B0':30.87 , 'C1':32.70 , 'C#1':34.65 , 'Db1':34.65 , 'D1':36.71 , 'D#1':38.89 , 'Eb1':38.89 , 'E1':41.20 , 'F1':43.65 , 'F#1':46.25 , 'Gb1':46.25 , 'G1':49.00 , 'G#1':51.91 , 'Ab1':51.91 , 'A1':55.00 , 'A#1':58.27 , 'Bb1':58.27 , 'B1':61.74 , 'C2':65.41 , 'C#2':69.30 , 'Db2':69.30 , 'D2':73.42 , 'D#2':77.78 , 'Eb2':77.78 , 'E2':82.41 , 'F2':87.31 , 'F#2':92.50 , 'Gb2':92.50 , 'G2':98.00 , 'G#2':103.83 , 'Ab2':103.83 , 'A2':110.00 , 'A#2':116.54 , 'Bb2':116.54 , 'B2':123.47 , 'C3':130.81 , 'C#3':138.59 , 'Db3':138.59 , 'D3':146.83 , 'D#3':155.56 , 'Eb3':155.56 , 'E3':164.81 , 'F3':174.61 , 'F#3':185.00 , 'Gb3':185.00 , 'G3':196.00 , 'G#3':207.65 , 'Ab3':207.65 , 'A3':220.00 , 'A#3':233.08 , 'Bb3':233.08 , 'B3':246.94 , 'C4':261.63 , 'C#4':277.18 , 'Db4':277.18 , 'D4':293.66 , 'D#4':311.13 , 'Eb4':311.13 , 'E4':329.63 , 'F4':349.23 , 'F#4':369.99 , 'Gb4':369.99 , 'G4':392.00 , 'G#4':415.30 , 'Ab4':415.30 , 'A4':440.00 , 'A#4':466.16 , 'Bb4':466.16 , 'B4':493.88 , 'C5':523.25 , 'C#5':554.37 , 'Db5':554.37 , 'D5':587.33 , 'D#5':622.25 , 'Eb5':622.25 , 'E5':659.26 , 'F5':698.46 , 'F#5':739.99 , 'Gb5':739.99 , 'G5':783.99 , 'G#5':830.61 , 'Ab5':830.61 , 'A5':880.00 , 'A#5':932.33 , 'Bb5':932.33 , 'B5':987.77 , 'C6':1046.50 , 'C#6':1108.73 , 'Db6':1108.73 , 'D6':1174.66 , 'D#6':1244.51 , 'Eb6':1244.51 , 'E6':1318.51 , 'F6':1396.91 , 'F#6':1479.98 , 'Gb6':1479.98 , 'G6':1567.98 , 'G#6':1661.22 , 'Ab6':1661.22 , 'A6':1760.00 , 'A#6':1864.66 , 'Bb6':1864.66 , 'B6':1975.53 , 'C7':2093.00 , 'C#7':2217.46 , 'Db7':2217.46 , 'D7':2349.32 , 'D#7':2489.02 , 'Eb7':2489.02 , 'E7':2637.02 , 'F7':2793.83 , 'F#7':2959.96 , 'Gb7':2959.96 , 'G7':3135.96 , 'G#7':3322.44 , 'Ab7':3322.44 , 'A7':3520.00 , 'A#7':3729.31 , 'Bb7':3729.31 , 'B7':3951.07 , 'C8':4186.01 , 'C#8':4434.92 , 'Db8':4434.92 , 'D8':4698.64 , 'D#8':4978.03 , 'Eb8':4978.03,  
                
//                 'Cb0':32.70 , 'C#b0':34.65 , 'Dbb0':34.65 , 'Db0':36.71 , 'D#b0':38.89 , 'Ebb0':38.89 , 'Eb0':41.20 , 'Fb0':43.65 , 'F#b0':46.25 , 'Gbb0':46.25 , 'Gb0':49.00 , 'G#b0':51.91 , 'Abb0':51.91 , 'Ab0':55.00 , 'A#b0':58.27 , 'Bbb0':58.27 , 'Bb0':61.74 , 'Cb1':65.41 , 'C#b1':69.30 , 'Dbb1':69.30 , 'Db1':73.42 , 'D#b1':77.78 , 'Ebb1':77.78 , 'Eb1':82.41 , 'Fb1':87.31 , 'F#b1':92.50 , 'Gbb1':92.50 , 'Gb1':98.00 , 'G#b1':103.83 , 'Abb1':103.83 , 'Ab1':110.00 , 'A#b1':116.54 , 'Bbb1':116.54 , 'Bb1':123.47 , 'Cb2':130.81 , 'C#b2':138.59 , 'Dbb2':138.59 , 'Db2':146.83 , 'D#b2':155.56 , 'Ebb2':155.56 , 'Eb2':164.81 , 'Fb2':174.61 , 'F#b2':185.00 , 'Gbb2':185.00 , 'Gb2':196.00 , 'G#b2':207.65 , 'Abb2':207.65 , 'Ab2':220.00 , 'A#b2':233.08 , 'Bbb2':233.08 , 'Bb2':246.94 , 'Cb3':261.63 , 'C#b3':277.18 , 'Dbb3':277.18 , 'Db3':293.66 , 'D#b3':311.13 , 'Ebb3':311.13 , 'Eb3':329.63 , 'Fb3':349.23 , 'F#b3':369.99 , 'Gbb3':369.99 , 'Gb3':392.00 , 'G#b3':415.30 , 'Abb3':415.30 , 'Ab3':440.00 , 'A#b3':466.16 , 'Bbb3':466.16 , 'Bb3':493.88 , 'Cb4':523.25 , 'C#b4':554.37 , 'Dbb4':554.37 , 'Db4':587.33 , 'D#b4':622.25 , 'Ebb4':622.25 , 'Eb4':659.26 , 'Fb4':698.46 , 'F#b4':739.99 , 'Gbb4':739.99 , 'Gb4':783.99 , 'G#b4':830.61 , 'Abb4':830.61 , 'Ab4':880.00 , 'A#b4':932.33 , 'Bbb4':932.33 , 'Bb4':987.77 , 'Cb5':1046.50 , 'C#b5':1108.73 , 'Dbb5':1108.73 , 'Db5':1174.66 , 'D#b5':1244.51 , 'Ebb5':1244.51 , 'Eb5':1318.51 , 'Fb5':1396.91 , 'F#b5':1479.98 , 'Gbb5':1479.98 , 'Gb5':1567.98 , 'G#b5':1661.22 , 'Abb5':1661.22 , 'Ab5':1760.00 , 'A#b5':1864.66 , 'Bbb5':1864.66 , 'Bb5':1975.53 , 'Cb6':2093.00 , 'C#b6':2217.46 , 'Dbb6':2217.46 , 'Db6':2349.32 , 'D#b6':2489.02 , 'Ebb6':2489.02 , 'Eb6':2637.02 , 'Fb6':2793.83 , 'F#b6':2959.96 , 'Gbb6':2959.96 , 'Gb6':3135.96 , 'G#b6':3322.44 , 'Abb6':3322.44 , 'Ab6':3520.00 , 'A#b6':3729.31 , 'Bbb6':3729.31 , 'Bb6':3951.07 , 'Cb7':4186.01 , 'C#b7':4434.92 , 'Dbb7':4434.92 , 'Db7':4698.64 , 'D#b7':4978.03 , 'Ebb7':4978.03};
  
//   this.frequency = 0;
  
  
//  /* PORTAMENTO */
  
//   var oscGlide = document.querySelector("#osc-portamento");
//   this.portamento = parseInt(oscGlide.value);
  
  
  
//   this.oscillator = this.audioContext.createOscillator();
//   this.oscillator.noteOn(0);
  
//   this.gain = this.audioContext.createGainNode();
//   this.gain.gain.value = 0;
  
//   this.filter = this.audioContext.createBiquadFilter();
//   this.filter.frequency.value = 5000;
  
//   this.filter.type = 0;
  
//   this.oscillator.connect(this.filter);
//   this.filter.connect(this.gain);
  
//   this.envelope = new Float32Array([0.0,0.0,0.0,0.0]);
  
//   this.gain.connect(this.audioContext.destination);
  
// };

// Synthesizer.prototype.noteOn = function(note){
  
//   var frequency = this.notes[note] || 0,
      
//       now = this.audioContext.currentTime;
  
//   this.frequency = frequency;
  
//   this.oscillator.frequency.cancelScheduledValues(now);
//   this.gain.gain.cancelScheduledValues(now);
  
//   this.oscillator.frequency.setValueAtTime(frequency, now);
  
//   this.gain.gain.setValueAtTime(this.gain.gain.value, now);
  
//   this.gain.gain.linearRampToValueAtTime(1.0, now + this.envelope[0]);
  
//   this.gain.gain.linearRampToValueAtTime(this.envelope[2], now + this.envelope[0] + this.envelope[1]);
  
// };

// Synthesizer.prototype.noteSlide = function(note){
  
//   var frequency = this.notes[note] || 0,
      
//       now = this.audioContext.currentTime;
  
//   this.frequency = frequency;
//   this.oscillator.frequency.linearRampToValueAtTime(frequency,now + this.portamento);
  
// };

// Synthesizer.prototype.noteOff = function(note, velocity){
  
//   var now = this.audioContext.currentTime;
  
//   this.gain.gain.cancelScheduledValues(0.0);
  
//   this.gain.gain.setValueAtTime(this.gain.gain.value, now);
//   this.gain.gain.linearRampToValueAtTime(0.0, now + this.envelope[3]);
  
// };

// Synthesizer.prototype.setFilterFrequency = function(value){
  
//   var now = this.audioContext.currentTime;
  
//   var minValue = 40;
//   var maxValue = this.audioContext.sampleRate / 2;
  
//   var numberOfOctaves = Math.log(maxValue / minValue) / Math.LN2;
  
//   var multiplier = Math.pow(2, numberOfOctaves * (value - 1.0));
  
//   this.filter.frequency.setValueAtTime(maxValue * multiplier, now);
  
// };

// Synthesizer.prototype.setFilterResonance = function(value){
  
//   var now = this.audioContext.currentTime;
  
//   this.filter.Q.setValueAtTime(value * 30, now);
  
// };

