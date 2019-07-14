<script>
import Layout from '@layouts/main'

export default {
  components: {
    Layout,
  },
  data() {
    return {
      ringtoneOptions: [
        { label: 'None', value: '' },
        {
          label: 'Radar (Default)',
          value: 'radar',
        },
      ],
      ringtonAudios: {
        radar:
          'https://www.ringtonespoint.com/static/p/ringtones/2018/08/06/otbals/40.mp3?title=40_iphone_x_radar_ringtone_mp3_ringtone_mp3.mp3',
      },
      ringtone: {
        work: 'radar',
        break: 'radar',
      },
    }
  },
  methods: {
    onChange(e) {
      const targetValue = e.target.value
      const aurdioUrl = this.ringtonAudios[e.target.value]
      const audio = new Audio(aurdioUrl)
      // https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
      const audioPromise = audio.play()

      if (audioPromise !== undefined) {
        audioPromise
          .then(() => {
            setTimeout(() => {
              audio.pause()
              audio.currentTime = 0
            }, 3000)
          })
          .catch((error) => {})
      }
    },
  },
}
</script>

<template>
  <Layout>
    <a-card title="Work">
      <a-radio-group :options="ringtoneOptions" @change="onChange" v-model="ringtone.work" />
    </a-card>
    <a-card title="Break">
      <a-radio-group :options="ringtoneOptions" @change="onChange" v-model="ringtone.break" />
    </a-card>
  </Layout>
</template>
