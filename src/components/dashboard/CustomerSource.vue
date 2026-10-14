<script setup lang="ts">
const option={

    tooltip:{
        trigger:'item'
    },

    series:[

        {
            type:'pie',

            radius:'60%',

            data:[

                {
                name:'官网',
                value:40
                },

                {
                name:'小程序',
                value:25
                },

                {
                name:'推荐',
                value:20
                },

                {
                name:'其他',
                value:15
                }

            ]

        }

    ]

}
</script>
