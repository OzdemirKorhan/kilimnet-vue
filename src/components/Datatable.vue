<template>
  <div>
    <vue-good-table :columns="columns" :rows="customers" />
  </div>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import {mapState} from "vuex"
export default {
  name: "Datatable",
  data() {
    return {
      columns: [
        {
          label: "id",
          field: "id"
        },{
          label: "İsim",
          field: "name"
        },
        {
          label: "Telefon",
          field: "phone"
        },
        {
          label: "Tip",
          field: "type"
        },
        {
          label: "Şirket",
          field: "company"
        },
        {
          label: "Bina",
          field: "building"
        },
        {
          label: "Ödeme Miktarı",
          field: "payment_amount"
        },
        {
          label: "Operator",
          field: "operator"
        },
        {
          label: "Yönetici",
          field: "manager"
        },
        {
          label: "Email Sayısı",
          field: "mail_count"
        },
        {
          label: "IP",
          field: "ip"
        },
        {
          label: "Fax",
          field: "fax"
        },
        {
          label: "Çalışan Sayısı",
          field: "employee_count"
        },
        {
          label: "Eposta",
          field: "email"
        },
        {
          label: "Domain",
          field: "domain"
        },
        {
          label: "Açıklama",
          field: "description"
        },
        {
          label: "Müşteri Açıklama",
          field: "customer_desc"
        },

        {
          label: "Kur",
          field: "currency"
        },
        {
          label: "Kredi Kartı",
          field: "credit_card"
        },
        {
          label: "Kontrat Başlangıcı",
          field: "contract_start_date"
        },
        {
          label: "Kontrat Bitişi",
          field: "contract_end_date"
        },
        {
          label: "Telefon Sayısı",
          field: "phone_service_count"
        },
        {
          label: "Plan",
          field: "plan"
        },
        {
          label: "Registrar",
          field: "registrar"
        },
        {
          label: "Temsilci",
          field: "rep"
        },
        {
          label: "Sunucu",
          field: "server"
        },
        {
          label: "Alt Bina",
          field: "subbuilding"
        }
      ],};
  },
  components: {
    VueGoodTable
  },
  computed: mapState({

    customers (state) {
      return state.customers.map(customer => {return {...customer, building :customer.building.name, type: customer.type.name}})
    },

  })
};
</script>
<style scoped>
.table {
  zoom: 0.8;
}
</style>
<style>
table span{
white-space: nowrap;
font-size:12px;}
</style>
