<template>
<v-container class="grey lighten-5">
<v-spacer style="height: 50px;"></v-spacer>
    <v-row>
        <v-card class="d-inline-block mx-auto">
            <v-container>
                <v-row justify="space-between">
                    <v-col>
                        <v-row class="flex-column ma-0"
                            style="justify-content: space-between;">
                            <v-col>
                            <v-card-title>
                            电话：18510926850
                            </v-card-title>
                            <v-card-title>
                            邮箱：kxdmmr@163.com
                            </v-card-title>
                            <v-card-title>
                            微信：kxdmmr
                            </v-card-title>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-row>
    <v-spacer style="height: 50px;"></v-spacer>
</v-container>
</template>

<script>
import { mdiAccount } from '@mdi/js'
export default {
    data: () => ({
      mdiAccount1: mdiAccount
    }),
}
</script>