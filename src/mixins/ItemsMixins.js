export const ItemsMixins = {
    data() {
        return {
            logo: require('@/assets/logo/HistoryApp_logo_light_tran_croped.png'),
            logoDark: require('@/assets/logo/HistoryApp_logo_black_croped.png'),
            imgDemo: require('@/assets/image-demo.png'),
            imgProps: { width: 200 },
            imgNavProps: { width: 50, blank: false },
            idOptions: [
                { value: 0, text: 'Elegir documento'},
                { value: 'Cédula de Ciudadanía', text: 'Cédula de Ciudadanía' },
                { value: 'Cédula de Extranjería', text: 'Cédula de Extranjería' },
                { value: 'Pasaporte', text: 'Pasaporte' },
                { value: 'Tarjeta de Identidad', text: 'Tarjeta de Identidad' },
                { value: 'Registro Civil', text: 'Registro Civil' },
            ],
            idGOptions: [
                { value: 0, text: 'Elegir género'},
                { value: 'Masculino', text: 'Masculino'  },
                { value: 'Femenino', text: 'Femenino' },
                { value: 'LGBTIQ+', text: 'LGBTIQ+' },
            ]
        }
    }
}