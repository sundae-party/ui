<template>
  
    <h1 class="text-4xl font-bold">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Integrations
        </span>
    </h1>

    <hr class="border-b-2 border-gray-400 my-8 mx-4">

    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Role
                                </th>
                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody class="bg-white divide-y divide-gray-200">
                            
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10">
                                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">
                                        Jane Cooper
                                        </div>
                                        <div class="text-sm text-gray-500">
                                        jane.cooper@example.com
                                        </div>
                                    </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                                    <div class="text-sm text-gray-500">Optimization</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Active
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    Admin
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

            <div>
    {{ integrations[0].name }}
    <li v-for="(item, index) in integrations" v-bind:key="index" v-bind:title="index">
        {{ item.name }}
    </li>
    </div>

</template>

<script>

export default {
  name: 'Integrations',
  data() {
    return {
        integrations: [{"name": "test"}]
    }
  },
  methods:{
        refresh(){
            console.log("Starting connection to WebSocket Server")
            this.connection = new WebSocket("wss://localhost/ws")

            this.connection.onmessage = function(event) {
                console.log(JSON.parse(event.data).fullDocument);
                this.integrations = JSON.parse(event.data).fullDocument
                console.log(this.integrations)
            }

            this.connection.onopen = function(event) {
                console.log(event)
                console.log("Successfully connected to the echo websocket server...")
            }
        }
  },
  mounted: function() {
    this.refresh()
  }
}
</script>